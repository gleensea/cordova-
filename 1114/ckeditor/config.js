/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// config.skin = 'bootstrapck';

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.contentCss = '/ckeditor/contents.css';

	config.font_names = '바탕;굴림;궁서;본고딕/Noto Sans KR;나눔고딕/Nanum Gothic;나눔명조/Nanum Myeongjo;맑은 고딕/Malgun Gothic';

	config.filebrowserUploadUrl = '/board/write_ckupload?CKEditorFuncNum=1';

	// config.enterMode = CKEDITOR.ENTER_BR;

	// config.stylesSet = 'mystyles';

	config.extraPlugins = 'image2,widget,dialog';
	config.image2_alignClasses = [ 'img-responsive' ];
	// config.contentsCss = "/assets/css/global.css";

	// config.stylesSet = [
	// 	{ name: 'Image Responsive', element: 'img', attributes: { 'class': 'img-responsive' } }
	// ];

	config.allowedContent = true;
	// config.extraAllowedContent = 'button iframe';
	config.removeButtons = 'Cut,Copy,Paste,PasteText,PasteFromWord,Redo,Undo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Save,NewPage,Preview,Print,Templates,Anchor,Flash,Smiley,PageBreak,About,ShowBlocks,Maximize';

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	// config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
};
