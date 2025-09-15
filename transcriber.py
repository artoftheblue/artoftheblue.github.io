import pyperclip
import eng_to_ipa as ipa
import time

def transcribe_word():
    clipboard_content = pyperclip.paste().strip()
    words = clipboard_content.split()

    if len(words) == 1:
        word = words[0]
        if "/" not in word and word.isalpha() and len(word) >= 2:
            pronunciations = ipa.ipa_list(word)
            pyperclip.copy(" ".join(f"/{word}/" for word in pronunciations[0]))
            print(f"Copied IPA transcriptions of '{word}': {pronunciations}")

if __name__ == "__main__":
    while True:
        transcribe_word()
        time.sleep(0.1)
