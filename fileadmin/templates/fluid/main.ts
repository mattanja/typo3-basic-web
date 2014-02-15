###
# Master template file
#
# Thanks http://www.marcoseiler.de/typo3/typo3-inhalte-ausgeben/fluidtemplate-typoscript.html
#

page = PAGE

# <!DOCTYPE html>
# <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
# <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
# <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
# <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

page.includeCSS {
	file1 = fileadmin/templates/web/css/bootstrap.min.css
	file11 = fileadmin/templates/web/css/bootstrap-theme.min.css
	file12 = fileadmin/templates/web/css/main.css
}

page.includeJS {
	file1 = fileadmin/templates/web/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	#template = FILE
	#template.file = fileadmin/templates/web/main.htm
	#variables {
	#	content < styles.content.get
	file = fileadmin/templates/fluid/layouts/ContentLayout.htm
	partialRootPath = fileadmin/templates/fluid/partials/
	layoutRootPath = fileadmin/templates/fluid/layouts/
	variables {
		#headerLogo < temp.headerLogo
		#headerNavi < temp.headerNavi
		#printHeader < temp.printHeader
		#leftCol < styles.content.getLeft
		#mainNavi < temp.mainNavi
		#subNavi < temp.subNavi
		#rootlineNavi < temp.rootlineNavi
		contentGet < styles.content.get
		#footerText < temp.footerText
		#footerNavi < temp.footerNavi
	}
}
