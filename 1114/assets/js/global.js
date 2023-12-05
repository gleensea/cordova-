"use strict";

$(function () {
	if ($(window).width() >= 768) {
		$('.navbar .navbar-nav .dropdown').hover(function () {
			$(this).addClass('open');
			$(this).children('.dropdown-toggle').attr('aria-expanded', 'true');
		}, function () {
			$(this).removeClass('open');
			$(this).children('.dropdown-toggle').attr('aria-expanded', 'false');
		})
	}

	$('.navbar .navbar-collapse').on('show.bs.collapse', function () {
		$('.navbar').addClass('open');
	})

	$('.navbar .navbar-collapse').on('hide.bs.collapse', function () {
		$('.navbar').removeClass('open');
	})

	$(document).on('click', '.navbar .navbar-nav .dropdown-menu', function (e) {
		e.stopPropagation();
	})

	$('[data-toggle="tooltip"]').tooltip();

	//알럿창 메뉴
	$('.navbar a[data-alert]').click(function (e) {
		e.preventDefault();
		var _alert = $(this).data('alert');
		alert(_alert);
		return false;
	});

	let clear = '<button type="reset" class="clear-input" tabindex="-1"></button>';
	$('.wr_form_item input.form-control:not([type="file"],[name="wr_captcha"]) ').after(clear);

	$('.wr_form_item input.form-control + .clear-input').click(function () {
		$(this).prev('input').val('').removeClass('valid-text');
		return false
	});
	$('.wr_form_item').on('focus blur keyup click', '.form-control', function (e) {
		e.preventDefault();
		if ($(this).val().length) {
			$(this).addClass('valid-text');
		} else {
			$(this).removeClass('valid-text');
		}
	});
})

function passport() {
	var result = {};

	$.ajax({
		async: false,
		method: 'get',
		url: '/passport'
	}).done(function (data) {
		result = data;
	});

	return result;
}

function getFormData(form) {
	var unindexed_array = form.serializeArray();
	var indexed_array = {};

	$.map(unindexed_array, function (n, i) {
		indexed_array[n['name']] = n['value'];
	});

	return indexed_array;
}