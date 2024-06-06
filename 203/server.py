from flask import Flask, render_template, jsonify
import sqlite3
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import text


def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except sqlite3.Error as e:
        print(e)
    return conn
# Read CSV data into a Pandas DataFrame and store it in an SQLite database
df = pd.read_csv("ProjectDsCleaned.csv")
connection = create_connection("demo.db")
df.to_sql('super_store_data', connection, if_exists='replace')
connection.close()

# Create an SQLAlchemy engine for database operations
db_url = 'sqlite:///demo.db'
engine = create_engine(db_url, echo=True)

# Create a Flask web application
app = Flask(__name__)

# Route to render the main HTML template
@app.route('/')
def index():
    return render_template('index.html')



    return jsonify(data)
@app.route('/get-data2')
def get_data2():
    connection = engine.connect()
    query = """SELECT Country, sum("Revenue") FROM super_store_data Group by Country LIMIT 3"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    
    return jsonify(data)



@app.route('/get-data3')
def get_data3():
    connection = engine.connect()
    query = """SELECT State, sum("Revenue") FROM super_store_data GROUP BY State LIMIT 8"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)

@app.route('/get-data4')
def get_data4():
    connection = engine.connect()
    query = """SELECT State, sum("Revenue") AS TotalRevenue FROM super_store_data GROUP BY State ORDER BY TotalRevenue ASC LIMIT 10"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)


@app.route('/get-data5')
def get_data5():
    connection = engine.connect()
    query = """SELECT "Sub Category",SUM("Net Profit") AS TotalProfit FROM super_store_data GROUP BY "Sub Category" ORDER BY TotalProfit DESC LIMIT 5"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)

@app.route('/get-dataline')
def get_dataline():
    connection = engine.connect()
    query = """SELECT "Product Category",SUM("Revenue") AS TotalRevenue FROM super_store_data GROUP BY "Product Category" ORDER BY TotalRevenue ASC LIMIT 10"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)



@app.route('/get-dataline2')
def get_dataline2():
    connection = engine.connect()
    query = """SELECT "Age Status", AVG(Revenue) AS avg_revenue FROM super_store_data GROUP BY "Age Status" HAVING avg_revenue > 0  ORDER BY avg_revenue ASC LIMIT 3"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)

@app.route('/get-dataline3')
def get_dataline3():
    connection = engine.connect()
    query = """SELECT "Month", SUM(Revenue) AS SUM_revenue FROM super_store_data GROUP BY "Month" HAVING SUM_revenue > 0  ORDER BY SUM_revenue"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)


@app.route('/get-datapie')
def get_datapie():
    connection = engine.connect()
    query = """SELECT Gender, sum("Net Profit") FROM super_store_data Group by Gender"""
    result = connection.execute(text(query))
    data = [{"status": row[0], "value": row[1]} for row in result]
    connection.close()
    return jsonify(data)





# @app.route('/get-datapareto')
# def get_datapareto():
#     connection = engine.connect()
#     query = """SELECT "Product Category", SUM("Revenue") AS TotalRevenue, COUNT("Product Category") AS ProductCount FROM super_store_data GROUP BY "Product Category" ORDER BY TotalRevenue DESC LIMIT 10"""
#     result = connection.execute(text(query))
#     data = [{"status": row[0], "value": row[1], "count": row[2]} for row in result]
#     connection.close()
#     return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)




