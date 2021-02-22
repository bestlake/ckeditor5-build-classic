//@ckeditor/ckeditor5-image/src/imageupload/utils.js
function isLocalImage(node) {
	if (!node.is('element', 'img') || !node.getAttribute('src')) {
		return false;
	}
	// 普通链接转为base64形式
	if (new RegExp('^https?', 'i').test(node.getAttribute('src'))) {
		node._setAttribute('src', 'data:image/jpeg;base64,' + btoa(node.getAttribute('src')));
	}
	return node.getAttribute('src').match(/^data:image\/\w+;base64,/g) ||
		node.getAttribute('src').match(/^blob:/g);
}
