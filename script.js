//complete this code
class Rectangle {
	constructor(width,height)
	{
		this._width;
		this._height;
	}
	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	getArea() {
		return width() * height();
	}
}

class Square extends Rectangle {

	getPerimeter() {
		var side = super(height());
		return 4*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
