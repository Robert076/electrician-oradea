#!/usr/bin/env python3
"""
Quick MySQL Connection Test Script
Replace the values below with your actual credentials
"""

import mysql.connector
from mysql.connector import Error

def test_mysql_connection():
    # 🔥 REPLACE THESE WITH YOUR ACTUAL VALUES
    config = {
        'host': 'athena.hosterion.net',
        'port': 3306,
        'user': 'dartimob_robert',      
        'password': 'Robert076!',  
        'database': 'dartimob_electricianoradea'    
    }
    
    try:
        print("🔄 Attempting to connect to MySQL database...")
        print(f"   Host: {config['host']}:{config['port']}")
        print(f"   User: {config['user']}")
        print(f"   Database: {config['database']}")
        print()
        
        # Attempt connection
        connection = mysql.connector.connect(**config)
        
        if connection.is_connected():
            db_info = connection.get_server_info()
            print("✅ Successfully connected to MySQL Server!")
            print(f"   MySQL Server version: {db_info}")
            
            # Get current database
            cursor = connection.cursor()
            cursor.execute("SELECT DATABASE();")
            record = cursor.fetchone()
            print(f"   Connected to database: {record[0]}")
            
            # Test query - show tables
            cursor.execute("SHOW TABLES;")
            tables = cursor.fetchall()
            
            if tables:
                print(f"\n📋 Tables in database ({len(tables)} found):")
                for table in tables:
                    print(f"   - {table[0]}")
            else:
                print("\n📋 No tables found in database (empty database)")
            
            cursor.close()
            
    except Error as e:
        print("❌ Error connecting to MySQL:")
        print(f"   {e}")
        
        # Common error hints
        if "Can't connect" in str(e):
            print("\n💡 Hints:")
            print("   - Check if the IP address is correct")
            print("   - Verify that remote MySQL access is enabled in cPanel")
            print("   - Make sure port 3306 is not blocked by firewall")
        elif "Access denied" in str(e):
            print("\n💡 Hints:")
            print("   - Double-check your username and password")
            print("   - Verify the user has permissions for this database")
            print("   - Check if remote access is allowed for this user")
        elif "Unknown database" in str(e):
            print("\n💡 Hints:")
            print("   - Check the database name spelling")
            print("   - Verify the database exists in cPanel → MySQL Databases")
    
    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()
            print("\n🔌 MySQL connection closed.")

if __name__ == "__main__":
    print("=" * 60)
    print("MySQL Connection Test Script")
    print("=" * 60)
    print()
    test_mysql_connection()
    print()
    print("=" * 60)