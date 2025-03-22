# odin-inventory-app

# Database

Inventory {
id (PK, Auto Increment)
name (String)
quantity (Integer)
unitPrice (Decimal)
categoryId (FK)
}

Category {
id (PK, auto increment)
name (string)
description (text, optional)
}
