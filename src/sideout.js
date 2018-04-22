
	var html = document.documentElement;

	function SideOut(options) {
		options = options || {};

		this.menu = options.menu;
		this._currentOffsetX = 0;
		this._opened = false;

		if (!this.menu.classList.contains('sideout-menu')) {
			this.menu.classList.add('sideout-menu');
		}

		this.tf = options.animation || 'cubic-bezier(0.4,0.0,0.2,1)';
		this._duration = parseInt(options.duration, 10) || 300;
		this._transform = parseInt(options.transform, 10) || 264;
	};

	SideOut.prototype.open = function() {
		var that = this;

		if (!html.classList.contains('sideout-open')) {
			html.classList.add('sideout-open');
		}

		this._opened = true;
			
		that._setTransition();
		that._transalteXTo(that._transform);
		// that._setShadow();

		setTimeout(function() {
			that.menu.style.transition = that.menu.style.transition = '';
		}, this._duration + 50);

	};

	SideOut.prototype.close = function() {
		var that = this;

		if (!this._isOpen && !this._opened) {
			return this;
		}

		this._opened = false;

		that._setTransition();
		that._transalteXTo(0);

		setTimeout(function() {
			html.classList.remove('sideout-open');
			that.menu.style.transform = that.menu.style.transition = that.menu.style.transform = '';
		}, this._duration + 50);

	};

	SideOut.prototype._setTransition = function() {
		this.menu.style.transition = 'transform ' + this._duration + 'ms ' + this.tf;
	};

	SideOut.prototype._transalteXTo = function(translateX) {
		this.menu.style.transform = 'translate(' + translateX +'px)';
	};

	// SideOut.prototype._setShadow = function() {
	// 	this.menu.style.boxShadow = '5px 0px 12px 0px rgba(51,51,51,0.06)';
	// };

	SideOut.prototype._isOpen = function() {
		return this._opened;
	};