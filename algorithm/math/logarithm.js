function log(x, n) {
	var i = 0;

    while(n > 1) {
        n = n / x;
        if(n >= 1) i++;
    }
    return i;
}