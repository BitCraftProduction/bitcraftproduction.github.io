---
title : "Python Data Types Explained (With Clear Examples, Tables, Diagrams & FAQs)"
image : "/assets/images/post/2025/python_data_types.webp"
author : "BitCraft Production"
date: 2025-04-30 07:00:00 +0600
description : "Learn all Python data types with real-life examples, memory size, mutability, diagrams, use cases & expert FAQs. Beginner-friendly yet deep-dive!"
tags : ["Python", "Coding", "Tutorial"]
faqs:
  - question: "What are Python data types?"
    answer: "Python data types are built-in classifications for values, such as numbers, strings, and collections, that define what operations can be performed on them."
  - question: "What is mutability?"
    answer: "Mutability refers to whether a data type's value can be changed after it is created."
  - question: "What is the difference between mutable and immutable data types?"
    answer: "Mutable data types (e.g., lists, dictionaries) can be modified after creation, while immutable data types (e.g., strings, tuples) cannot be changed after creation."
  - question: "What are the main data types in Python?"
    answer: "The main data types in Python include: Integers, Floats, Strings, Lists, Tuples, Dictionaries, Sets, and Booleans."
  - question: "What is the memory size of different data types?"
    answer: "The memory size of data types depends on the implementation and the specific data type. For example, an integer is typically 28 bytes, while a list size can vary based on its contents."
  - question: "What are the use cases of different data types?"
    answer: "Use cases for data types depend on the type of data being processed. For example, Integers are used for counting, Strings are for text manipulation, and Lists are for storing ordered collections of items."
---

Data types are the categories of different data that a programming language recognize. Data types is one of the most essential concepts in programming. I have seen that many beginners get confused with the different data types. First question which comes in their mind is why are there several data types. Therefore, in this blog, we will explore the different **data types in python and their categories**. And we will also see examples of each data type, as well as we will explore mutability of each data type.

## Python Data Types

Python data types are divided into **four major categories**:
1. **Standard / Built-in Data Types**
2. **Collection (Container) Data Types**
3. **Binary Data Types**
4. **User-Defined / Custom Data Types**

### 1. **Standard / Built-in Data Types**

Standard/built-in data types are those which are provided by the programming language itself. There are several standard/built-in data types in python such as `int`, `float`, `complex`, `bool`, `str`, `NoneType`. Let's dive into them one by one.

#### **Numeric Types**

These data types are used to store numeric values. Such as `int`, `float`, `complex` which stores different types of mathematical numbers.

| Type     | Description                              | Example        |
|----------|------------------------------------------|----------------|
| `int`    | Integer numbers (positive, negative, 0)  | `x = 42`       |
| `float`  | Decimal numbers                          | `y = 3.14`     |
| `complex`| Complex numbers with real and imaginary parts | `z = 2 + 3j` |

#### **Text Type**

Text types are used to store text values. `str` is the text type.

| Type     | Description            | Example        |
|----------|------------------------|----------------|
| `str`    | String of characters   | `name = "Ganesh"` |


#### **Boolean Type**

Boolean type is a data type which is used to store true or false values. Which is useful in programming for decision making. In many scenarios, we need to check if a condition is true or false. 

| Type     | Description            | Example        |
|----------|------------------------|----------------|
| `bool`   | True or False values   | `is_valid = True` |


#### **None Type**

None type is a special type of data type which is used to represent the absence of a value. It is often used as a default value for variables or function parameters.

| Type        | Description                 | Example        |
|-------------|-----------------------------|----------------|
| `NoneType`  | Represents the absence of value | `result = None` |



### 2. **Collection (Container) Data Types**

Now, let's dive into the second category of data types - **Collection (Container) Data Types**. It includes data types which are used to store multiple values such as list, tuple, set, frozenset and dict.

#### **List**

List is an interesting data type. Imagine you need to store a list of items, such as fruits, colors, or even you are trying to store marks of all students in a class. Then, you have two options: define a separate variable for each student, but be honest, it would be a hectic task. So, here comes the `list` data type. It stores the list of items in a single variable. 
Here is an example:

```python
fruits = ["apple", "banana", "cherry"]
```

List is an ordered, mutable, and allows duplicates data type. It means that the order of the items in the list is preserved, it allows duplicates, and we can change the values of the list after it is created (i.e., it is mutable).


#### **Tuple**

Tuple is an ordered, immutable, and allows duplicates data type. The difference between list and tuple is that tuple is immutable, i.e., we cannot change the values of the tuple after it is created.

For example:

```python
coordinates = (10.5, 20.3)
```

#### **Set**

Set is an unordered, mutable, and no duplicates data type. 
Sets are useful when we need to ensure that our data contains no duplicates. For instance, we need in membership testing or removing duplicate entries from a list.

Sets support mathematical operations like union, intersection, and difference. They are powerful tools for solving problems involving sets of data.

For example:

```python
unique_nums = {1, 2, 3}
```


#### **Frozenset**

Frozenset is an immutable version of set. 

For example:

```python
frozen = frozenset([1, 2, 3])
```

#### **Dict (Dictionary)**

Dict is one of the most used data types in real world applications. It stores key-value pairs in a single variable. It is an unordered, mutable, and allows duplicates data type. 

For example:

```python
person = {"name": "Ganesh", "age": 20}
```


Got it! Here's a blog-style explanation of the **Binary Data Types** in Python—detailed but still clear and engaging for readers.

---

### 3. Binary Data Types

Binary data types come into play when we need to work with low-level data, such as working with files, images, or any form of low-level data manipulation. These types allow us to work efficiently with raw bytes, and give us full control over memory and performance.


#### 1. Bytes — Immutable Binary Sequences

The `bytes` data type represents an **immutable sequence of bytes**—each byte being a number between 0 and 255.

```python
b = b"hello"
print(b[0])  # Output: 104 (ASCII for 'h')
```

- The `b` prefix indicates that the string is stored as bytes, not Unicode characters.
- Since it's immutable, you cannot change its content after creation.
- It's commonly used when reading from binary files, communicating over sockets, or encoding strings for transfer.

**Key Features:**
- Fixed (unchangeable) once defined.
- Efficient for storage and transmission.
- Supports slicing like lists.


#### 2. Bytearray — Mutable Binary Sequences

The `bytearray` type is very similar to `bytes`, with one key difference: it is **mutable**. That means you can modify its content after creation—ideal for cases where you need to edit binary data.

```python
ba = bytearray([65, 66, 67])  # Represents A, B, C
ba[0] = 90
print(ba)  # Output: bytearray(b'ZBC')
```

- You can add, delete, or update bytes directly.
- It works just like a list of integers (0–255), but stores data as bytes.
- Perfect for use cases like compression algorithms or data streaming.

**Key Features:**
- Editable binary data.
- Indexable and sliceable.
- Interchangeable with `bytes` in many APIs.


#### 3. Memoryview — Efficient Window to Data

The `memoryview` object allows you to access and manipulate the underlying memory of binary data **without copying it**. This is especially useful when dealing with **large data sets**, such as files, images, or buffers, where performance and memory efficiency are critical.

```python
b = b"hello"
mv = memoryview(b)
print(mv[1])  # Output: 101 (ASCII for 'e')
```

- You can slice or access parts of the data without duplicating it in memory.
- Works with objects that support the buffer protocol: `bytes`, `bytearray`, `array.array`, etc.
- Immutable if the source is immutable (`bytes`), mutable if the source is (`bytearray`).

**Key Features:**
- Zero-copy access to binary data.
- Optimized for speed and memory use.
- Great for I/O-heavy or performance-sensitive programs.


### 4. **User-Defined / Custom Data Types**

Python provides us with the ability to create custom data types using classes. They are particularly useful when we need to represent real-world entities in our programs.

**Why Create Custom Data Types?**

**Built-in types** like `int`, `str`, or `list` are great—but what if we want to represent a `Car`, `Student`, or `BankAccount`?

That's where classes come in. Classes let us define the structure (data) and behavior (functions) of our own objects.

**How It Works: A Simple Example**

```python
class Car:
    def __init__(self, brand):
        self.brand = brand
```
- `my_car = Car("Tesla")`


## **Type Categories by Behavior**


| Feature               | Mutable                            | Immutable                          |
|-----------------------|-------------------------------------|-------------------------------------|
| **Definition**         | Changeable after creation          | Cannot be changed after creation    |
| **Examples**           | `list`, `dict`, `set`, `bytearray` | `int`, `str`, `tuple`, `bytes`      |
| **Memory Address**     | Can stay the same after change     | Changes on modification             |
| **Performance**        | Slightly slower                    | Generally faster                    |
| **Thread-Safety**      | Not safe without locks             | Safer due to immutability           |
| **Use Case**           | When data needs updates            | When data should stay constant      |


## **Primitive vs Non-Primitive**

| Feature                 | **Primitive**                             | **Non-Primitive**                          |
|-------------------------|--------------------------------------------|--------------------------------------------|
| **Definition**           | Basic, built-in data types                 | Complex or custom-built data types         |
| **Stores**              | Single value                               | Multiple values or combinations            |
| **Examples**            | `int`, `float`, `bool`, `str`              | `list`, `dict`, `tuple`, `set`, `class`    |
| **Mutability**          | Mostly immutable                          | Can be mutable or immutable                |
| **Structure**           | Simple                                      | Structured and flexible                    |
| **Use Case**            | For simple calculations or values          | For collections, data models, etc.         |
| **Built-in?**           | Always built-in                            | Can be built-in or user-defined            |



## Data Type Conversion

**Data Type Conversion** means changing the value of one data type into another.

There are **two main types**:

### 1. **Implicit Conversion (Automatic)**
- Done by Python automatically.
- Happens when mixing different numeric types in expressions.

```python
x = 5       # int
y = 2.0     # float
result = x + y  # result becomes float → 7.0
```
> Note: Safe, no data loss.


### 2. **Explicit Conversion (Type Casting)**

- Done manually by the programmer using built-in functions like `int()`, `float()`, `str()`, etc.

```python
x = "10"
y = int(x)   # string to integer
```

> Note: Might cause **data loss** or **errors** if not used carefully.


### Data Type Conversion Table

| **From \ To** | `int()`        | `float()`      | `str()`        | `bool()`       | `list()`        |
|---------------|----------------|----------------|----------------|----------------|-----------------|
| **int**       | ✅ No change    | ✅ e.g. `5 → 5.0` | ✅ `"5"`       | ✅ `True`       | ❌ Not directly  |
| **float**     | ✅ `5.9 → 5`    | ✅ No change    | ✅ `"5.9"`     | ✅ `True`       | ❌ Not directly  |
| **str**       | ⚠️ If number string like `"10"` → `10` | ⚠️ `"3.14"` → `3.14` | ✅ No change    | ✅ Non-empty → `True` | ✅ If iterable like `"abc"` → `['a', 'b', 'c']` |
| **bool**      | ✅ `True → 1` / `False → 0` | ✅ `True → 1.0` | ✅ `"True"` or `"False"` | ✅ No change    | ❌ Not directly  |
| **list**      | ❌ Error        | ❌ Error        | ✅ e.g. `[1, 2]` → `"[1, 2]"` | ✅ Non-empty → `True` | ✅ No change     |

## Python Data Types Mind Map

<img src="/assets/images/post/2025/python_data_types_mindmaps.webp" alt="Python Data Types Mind Map" width="100%">


## Common Interview Questions

### 1. What are mutable vs immutable data types?
- **Mutable** data types can be changed after they are created (e.g., lists, dictionaries, sets).
- **Immutable** data types cannot be changed after they are created (e.g., strings, tuples, integers).

### 2. Difference between list, tuple, and set?
- **List**: Ordered, mutable, allows duplicates (e.g., `[1, 2, 2, 3]`).
- **Tuple**: Ordered, immutable, allows duplicates (e.g., `(1, 2, 2, 3)`).
- **Set**: Unordered, mutable, does not allow duplicates (e.g., `{1, 2, 3}`).

### 3. Is Python strongly or weakly typed?
- Python is **strongly typed**, meaning you cannot perform operations on incompatible data types without explicit conversion (e.g., adding a string to an integer will raise an error).

## FAQs (Python Data Types)

### 1. What are Python data types?
**Answer**: Python data types are built-in classifications for values, such as numbers, strings, and collections, that define what operations can be performed on them.

### 2. What is mutability?
**Answer**: Mutability refers to whether a data type's value can be changed after it is created.

### 3. What is the difference between mutable and immutable data types?
**Answer**: **Mutable** data types (e.g., lists, dictionaries) can be modified after creation. **Immutable** data types (e.g., strings, tuples) cannot be changed after creation.

### 4. What are the main data types in Python?
**Answer**: The main data types in Python include:
- **Numbers**: Integers, Floats
- **Sequence Types**: Strings, Lists, Tuples
- **Mapping Type**: Dictionary
- **Set Types**: Sets, Frozensets
- **Boolean Type**: Bool
- **None Type**: NoneType

### 5. What is the memory size of different data types?
**Answer**: The memory size of data types depends on the implementation and the specific data type. For example, an integer is typically 28 bytes, while a list size can vary based on its contents.

### 6. What are the use cases of different data types?
**Answer**: 
- **Integers**: Used for counting and mathematical operations.
- **Floats**: Used for representing decimal numbers.
- **Strings**: Used for text manipulation.
- **Lists**: Used for storing ordered collections of items.
- **Tuples**: Used for storing ordered, immutable collections.
- **Dictionaries**: Used for storing key-value pairs.
- **Sets**: Used for storing unordered collections with no duplicates.


---

> **Feeling overwhelmed with coding tutorials?**  
> Too much to learn, not enough time?
> 
> **Meet Study Friend** — your AI-powered coding tutor.  
> It creates flashcards, mind maps, and quick facts from any topic in seconds.
>
> [Download Study Friend Now](https://play.google.com/store/apps/details?id=com.studyfriend.mobile) — Study less, score more.

---