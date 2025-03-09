from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np
from sklearn.preprocessing import OneHotEncoder, LabelEncoder
import tensorflow as tf
from tensorflow.keras.models import load_model
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Load the dataset and model (this could be done once and stored in memory to save time)
def load_data_and_model():
    # Load dataset and encode the disease labels and symptoms
    df = pd.read_csv('./dataset/symtoms_df.csv')
    df = df.drop(columns='Symptom_4')

    label_encoder = LabelEncoder()
    df['Disease'] = label_encoder.fit_transform(df['Disease'])

    onehot_encoder = OneHotEncoder(sparse_output=False, handle_unknown='ignore')
    symptoms = df[['Symptom_1', 'Symptom_2', 'Symptom_3']]
    onehot_encoder.fit(symptoms)

    model = load_model('./model/disease_prediction_model.h5')

    return df, label_encoder, onehot_encoder, model

# Function to predict disease based on user input
def predict_disease(user_symptoms, label_encoder, onehot_encoder, model):
    input_data = pd.DataFrame([user_symptoms], columns=['Symptom_1', 'Symptom_2', 'Symptom_3'])
    symptoms_encoded = onehot_encoder.transform(input_data)
    y_pred = model.predict(symptoms_encoded)
    y_pred_classes = np.argmax(y_pred, axis=1)
    predicted_disease = label_encoder.inverse_transform(y_pred_classes)
    return predicted_disease[0]

# Route for the landing page (Home)
@app.route('/')
def index():
    return render_template('index.html')  # Renders the HTML form

# Route to process the user input and predict the disease
@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from the form
    symptom_1 = request.form.get('Symptom_1')
    symptom_2 = request.form.get('Symptom_2')
    symptom_3 = request.form.get('Symptom_3')

    user_symptoms = [symptom_1, symptom_2, symptom_3]

    # Load the model and preprocessors
    df, label_encoder, onehot_encoder, model = load_data_and_model()

    # Get prediction
    predicted_disease = predict_disease(user_symptoms, label_encoder, onehot_encoder, model)
    
    # Get recommended medication based on predicted disease
    result_df = pd.read_csv('./dataset/medications.csv')
    medication = result_df[result_df['Disease'].str.contains(predicted_disease, case=False, na=False)].iloc[0]['Medication']

    # Return the result as JSON
    return jsonify({'disease': predicted_disease, 'medication': medication})

if __name__ == '__main__':
    app.run(debug=True)
