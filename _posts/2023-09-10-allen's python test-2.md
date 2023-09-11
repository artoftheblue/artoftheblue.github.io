---
layout: post
title: Python, first practice homework for MGPU
categories: 
---

а) Составьте список из 5 строковых элементов. Добавьте к нему один новый элемент и выведите список на печать. 

```python
array = ["string", "string", "string", "string", "string"]
array.append("new-string")
print(array)
```

б) Составьте список из 6 строковых элементов. Удалите один из элементов и выведите список на печать.  

```python
array = ["string", "string", "string", "string", "string", "string-to-delete"]
array.remove("string-to-delete")
print(array)
```

в) Составьте список из 6 имен. Выведите на печать первый и последний элементы списка. Добавьте в 0-левую 
позицию списка имя «Коля». Выведите новый список на печать.  

```python
array = ["name", "name", "name", "name", "name", "name"]
array.insert(0, "Коля")
print(array)
```

г) Составьте кортеж из нескольких элементов и определите его длину. 

```python
thing = (1, 2, 3)
print(len(thing))
```

д) Составьте новый кортеж, добавьте его в старый и выведите его на печать. 

```python
thing = (1, 2, 3)
new_thing = (3, 4, 5)

# если честно какой-то бред, потому что это не изменение кортежа, а создание нового вообще и перезапись его в старую переменную
# кортеж это статический итератор и изменять его нельзя
thing = (1, 2, 3, new_thing)
print(thing)
```

е) Подготовьте словарь, состоящий из 10 пар слов, и выведите его на печать. 

```python
dictionary = {"word1a": "word1b",
              "word2a": "word2b",
              ... # здесь допишите по аналогии
              "word9a": "word9b",
              "word10a": "word10b"}
print(dictionary)
```

ж) Составьте словарь 6-ти электронных адресов и соответствующих им адресатов. Выведите словарь на печать. 

```python
dictionary = {"email1@email.com": "Name",
              "email2@email.com": "Name",
              ... # здесь допишите по аналогии
              "email6@email.com": "Name"}
print(dictionary)
```

з) Добавьте и удалите один из элементов словаря и выведите его на печать. 

```python
test = {"A": "first", "B": "second"}
test["C"] = "third"
del test["A"]
print(test)
```