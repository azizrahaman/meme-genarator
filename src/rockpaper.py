import random
data = ['rock','paper','sessior']

def checkWiner(a, b):
	if(a == 'rock' and b == 'sessior') or (a == 'sessior' and b == 'paper') or (a == 'paper' and b == 'rock'):
		print("Hola! You win!!")
		return
	else:
		print("Computer Wins!")


def game(userInput):
	if (userInput != 'rock') and (userInput != 'paper') and (userInput != 'sessior'):
		print("Please Enter a valid choice!")
		return

	pcChoice = random.choice(data)
	print("Your Choice is: " + userInput + " And Computer Choice is: " + pcChoice)

	if userInput != pcChoice:
		checkWiner(userInput, pcChoice)

	else:
		print("Draw")


game(input("Enter Your Choice: "))