<?php
$userconfig = include(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'LocalConfiguration.user.php');

return array(
	'BE' => array(
		'debug' => FALSE,
		'explicitADmode' => 'explicitAllow',
		'installToolPassword' => $userconfig['installToolPassword'],
		'loginSecurityLevel' => 'rsa',
	),
	'DB' => array(
		'extTablesDefinitionScript' => 'extTables.php',
		'database' => $userconfig['database'],
		'username' => $userconfig['username'],
		'password' => $userconfig['password'],
		'host' => 'localhost',
		'port' => '',
		'socket' => '',
	),
	'EXT' => array(
		'extConf' => array(
			'css_styled_content' => 'a:2:{s:15:"setPageTSconfig";s:1:"1";s:19:"removePositionTypes";s:1:"1";}',
			'extension_builder' => 'a:3:{s:15:"enableRoundtrip";s:1:"1";s:15:"backupExtension";s:1:"1";s:9:"backupDir";s:35:"uploads/tx_extensionbuilder/backups";}',
			'kit_sharedcalendar' => 'a:0:{}',
			'rsaauth' => 'a:1:{s:18:"temporaryDirectory";s:0:"";}',
			'saltedpasswords' => 'a:2:{s:3:"BE.";a:4:{s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\PhpassSalt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}s:3:"FE.";a:5:{s:7:"enabled";i:1;s:21:"saltedPWHashingMethod";s:41:"TYPO3\\CMS\\Saltedpasswords\\Salt\\PhpassSalt";s:11:"forceSalted";i:0;s:15:"onlyAuthService";i:0;s:12:"updatePasswd";i:1;}}',
			'vhs' => 'a:0:{}',
		),
	),
	'EXTCONF' => array(
		'lang' => array(
			'availableLanguages' => array(),
		),
	),
	'FE' => array(
		'debug' => FALSE,
		'loginSecurityLevel' => 'rsa',
	),
	'GFX' => array(
		'colorspace' => 'RGB',
		'im' => 1,
		'im_mask_temp_ext_gif' => 1,
		'im_path' => '/usr/bin/',
		'im_path_lzw' => '/usr/bin/',
		'im_v5effects' => -1,
		'im_version_5' => 'gm',
		'image_processing' => 1,
		'jpg_quality' => '80',
	),
	'SYS' => array(
		'caching' => array(
			'cacheConfigurations' => array(
				'extbase_object' => array(),
			),
		),
		'compat_version' => '6.2',
		'devIPmask' => '',
		'displayErrors' => FALSE,
		'enableDeprecationLog' => FALSE,
		'encryptionKey' => $userconfig['encryptionKey'],
		'isInitialInstallationInProgress' => FALSE,
		'sitename' => 'New TYPO3 site',
		'sqlDebug' => 0,
		'systemLogLevel' => 2,
		't3lib_cs_convMethod' => 'mbstring',
		't3lib_cs_utils' => 'mbstring',
	),
);
?>