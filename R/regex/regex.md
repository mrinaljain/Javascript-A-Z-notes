# Regular Expressions

Regular expressions are patterns used to match character combinations in strings.

and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. 


## Creating a regular expression



### Example

The regular expression /[^a-z0-9]/g can be broken down as follows:

Breakdown:
/ ... / → This denotes the start and end of the regular expression.
[^ ... ] → This defines a negated character set, meaning it matches any character NOT listed inside the brackets.
a-z → Matches lowercase English letters (a to z).
0-9 → Matches digits (0 to 9).
[^a-z0-9] → Matches any character that is NOT a lowercase letter or a digit (i.e., special characters, spaces, uppercase letters, punctuation, etc.).
g (global flag) → Ensures that the regex searches for all matches in the string instead of stopping at the first match.