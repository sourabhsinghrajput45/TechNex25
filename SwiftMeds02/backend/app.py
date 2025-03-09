from flask import Flask, request, render_template
from check_availability import check_medicine_availability

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check_availability', methods=['POST'])
def check_availability():
    # Get the city and medicine from the user input
    city = request.form.get('city')
    medicine = request.form.get('medicine')
    
    # Call the function from the model to check availability
    result = check_medicine_availability(city, medicine)
    
    return render_template('result.html', result=result, city=city, medicine=medicine)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
