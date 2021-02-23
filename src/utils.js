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

// plugins/easyimage/plugin.js
// Assign src once, as it might be a big string, so there's no point in duplicating it all over the place.
var imgSrc = img.getAttribute( 'src' );
if (new RegExp( '^https?' , 'i' ).test(imgSrc)) {
	imgSrc = 'data:image/jpeg;base64,' + btoa(imgSrc);
}
// Image have to contain src=data:...
var isDataInSrc = imgSrc && imgSrc.substring( 0, 5 ) == 'data:',
	isRealObject = img.data( 'cke-realelement' ) === null;
