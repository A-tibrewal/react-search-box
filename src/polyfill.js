String.prototype.containsString = function (str) {
  str = str.toLowerCase();
  var index = this.toLowerCase().indexOf(str);
  if (index === -1) {
      return false;
  } else {
      return true;
  }
}

Array.prototype.containsString = function (str) {
  var index = this.findIndex(item => str.toLowerCase() === item.toLowerCase());
  if (index === -1) {
      return false;
  } else {
      return true;
  }
}