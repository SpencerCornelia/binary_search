In my own words

Binary search requires the input array to be sorted

Binary search is used when you're wanting to search an array in O(log n) time instead of O(n) <- linear search

Linear search is when you search through an array starting at index 0 and look for a specific value.  It is O(n) time because worst case scenario, it takes you from index 0 to the last index to find the value that you're looking for.

Breakdown :
	1. The idea behind Binary Search is that you immediately look for the value in the middle of the array.  Since the array is sorted, we know that if the value is either less/greater than the middle value, then we can cut the array in half.
	2. We'll want to create three different variables to begin.  The starting point for any array, the end point for any array, and the middle index.  The starting point is 0.  The end point is the length of the array.
	3. If the value is greater than the middle index, then we can shift the starting point to 1 more than the middle index.  To do this, we can add 1 to the middle index variable.  The stopping point is still the length of the array.
	4. If the value is less than the middle index, then we can shift the stopping point to 1 minus the middle index.  To do this, we can subtract 1 from the middle index.
	5. The key to this is to write a while loop that ensures that the value isn't the middle index and that the starting index is less than the stopping index.  When any of the three, breaks than we need to look for the value.
	6. After the while loop, we need to change the middle index.  To do this, we'll divide the difference of the new stopping and starting point by 2.  
	7. We'll either return the value or -1