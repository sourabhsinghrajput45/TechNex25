import pandas as pd

def load_data():
    # Define file paths for different cities
    file_paths = {
        "Bhopal": r".\dataset\bhopal_filtered_data.csv",
        "Dewas": r".\dataset\dewas_filtered_data.csv",
        "Ujjain": r".\dataset\ujjain_medicine.csv",
        "Jabalpur": r".\dataset\jabalpur_filtered_data.csv"
    }
    
    # Load and combine data from all CSV files
    dataframes = [pd.read_csv(path) for path in file_paths.values()]
    return pd.concat(dataframes, ignore_index=True)

def check_medicine_availability(city, medicine):
    # Load combined data
    df = load_data()

    # Clean up the "City" and "Medicine Name" columns (lowercase for case-insensitive comparison)
    df["Medicine Name"] = df["Medicine Name"].str.lower()
    df["City"] = df["City"].str.lower()
    
    # Convert user inputs to lowercase for comparison
    city = city.lower()
    medicine = medicine.lower()

    # Check if the medicine is available in the specified city
    available_in_city = df[(df["City"] == city) & (df["Medicine Name"] == medicine)]
    
    if not available_in_city.empty:
        return f"✅ {medicine.title()} is available in {city.title()}."
    else:
        # If not available in the specified city, check availability in other cities
        other_cities = df[df["Medicine Name"] == medicine]["City"].unique()
        
        if len(other_cities) > 0:
            return f"❌ {medicine.title()} is NOT available in {city.title()}. But it is available in: {', '.join(other_cities).title()}."
        else:
            return f"❌ {medicine.title()} is NOT available in any listed cities."
