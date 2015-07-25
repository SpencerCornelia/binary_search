function binarySearch(items, value) {
	var startIndex = 0;
	var stopIndex = items.length-1;
	var middleIndex = Math.floor((stopIndex - startIndex)/2);

	while(items[middleIndex] != value && startIndex < stopIndex) {
		if (value < items[middle]) {
			stopIndex = middleIndex - 1;
		} else if (value > items[middle]) {
			startIndex = middle + 1;
		}

		middle = Math.floor((stopIndex + startIndex)/2);
	}

	return (items[middle] != value) ? -1 : middle;
}
