from sample import madlib, vacation, code, hp, hungergames, zombie
import random

if __name__ == "__main__":
    m = random.choice([madlib, vacation, code, hp, hungergames, zombie])
    m.madlib()