on master branch and want to do new piece of work:

git checkout -b name of branch - this will create and checkout a new branch, no longer workong on the master branch

do work on this branch

git add -A - this will add all changed files on this branch

git commit -m "" - message for what changes have been made for this commit

optional: git git push origin branch name - this pushes this branch onto github

when i am happy with work and want to merge with master: git checkout master

git merge name of branch - merges branch onto master



git branch -d name of branch - this is a safety command, deletes branch as long as there are no uncommitted changes

git branch -D name of branch - force delete, same as above but not ask questions or check if it needs deleting


git branch -m "name of branch" - this will change the name of the branch i am working on - Make sure not to do this on master

git fetch -p - this will prune any branches have been deleted on gitHub but remain locally available



create for loop to see if card includes an id class, if it does it is not face down

step 1

after every flip, loop through all the cards - consolelog hello to test each flip is working. Should be a total of number of cards

step 2

once loop is made, find way of determining whether card is face up or face down - could be does the classlist include pokeman id
should be able to do a consolelog of all cards for each flip - should be 9 face downs and 1 face up for each click

find a way of counting number of classes, classlist, on each card. 2 classes for facedown, 3 for face up. 

step 3 

count how many are face up. consolelog when there are cards face up

step 4

reset would be to toggle forced false 
if value of step 3 is == 2 then reset all cards

step 5

turn values of step 4 into an array by pushing the values. This can be used to check the card.id in a loop .length. If pairs match, do something, if they don't match reset 