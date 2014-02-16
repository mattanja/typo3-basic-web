###
# Master template file
#
# http://docs.typo3.org/typo3cms/TyposcriptReference/ContentObjects/Fluidtemplate/Index.html
# http://t3n.de/magazin/seitentemplates-fluid-226788/
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

# <script>window.jQuery || document.write('<script src="{f:uri.resource(path:'../web/js/vendor/jquery-1.10.1.min.js')}"><\/script>')</script>
# <script src="js/vendor/bootstrap.min.js"></script>
# <script src="js/main.js"></script>
# Check out: https://github.com/FluidTYPO3/vhs
page.includeJS {
	file1 = fileadmin/templates/web/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js
	#CDN file10 = fileadmin/templates/web/js/vendor/jquery-1.10.1.min.js
	file11 = fileadmin/templates/web/js/vendor/bootstrap.min.js
	file12 = fileadmin/templates/web/js/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	template = FILE
	template.file = fileadmin/templates/fluid/main.htm
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



json = PAGE
json {
	typeNum = 999

	config {
		disableAllHeaderCode = 1
		additionalHeaders = Content-type:application/json
		xhtml_cleaning = 0
		admPanel = 0
	}

	# http://docs.typo3.org/typo3cms/ExtbaseFluidBook/8-Fluid/2-using-different-output-formats.html
	10 =< tt_content.list.20.kitsharedcalendar_sharedcalendar
}

<INCLUDE_TYPOSCRIPT:source="FILE:fileadmin/templates/fluid/SharedCalendar.ts">
