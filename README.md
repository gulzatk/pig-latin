# Pig Latin Translator

### By Gulzat Karimova and Tanner Damron

## Description

This webpage will take user input from a form and translate it into pig latin and return the translation
back to the webpage.

Behavior                      Input                     Output

Does nothing to               "4%                         ""
non-alphabet input

Adds "ay" to single           "i"                        "iay"
letter words

Words beginning
with vowel                    "eye"                      "eyeway"
add "way"

Words beginning with
1 or more consonants          "study"                    "udystay"
add consonants to end
of word and add "ay"
after

Words beginning with
"y" treat as a consonants      "yard"                     "ardyay"
and add "ay"

If first consonants have
"qu" then move both to end     "squeal"                   "ealsquay"
 of words and add "ay"    

## Setup

Clone the repository.

Open a simple HTTPserver in the top of the cloned directory. For a mac, run the following command in your terminal:

python-m SimpleHTTPServer

Then open your web browser of choice to localhost:8000s

## Technologies Used

HTML, CSS, JavaScript Bootstrap

## License

Copyright (c) 2018 Tanner Damron, Gulzat Karimova

This software is licensed under the MIT license.
