<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ribo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'L*bpQ+](LYUFI3$R%Tj@yJfcKx@VZF5D`#ed?Ah0%85g$*7r[B.J(7r<~$}d&eZ,' );
define( 'SECURE_AUTH_KEY',  'AG[FpI|>ak~dJF]|ILG~yM((&$eiUYA:rY9.^)PE&&hX/@1NsP(IV x,I0${ab5K' );
define( 'LOGGED_IN_KEY',    ':^S@Z3sm)x#-b9$nVSWvy?_x1n}n)r_5T7nTp5T^nsU$6^4F_k=%eA4zdnF`6E[s' );
define( 'NONCE_KEY',        '_y%WxvqDekdj>[NlRA#,A!r,toZR=} ,^IeTj.arjZaOs]P|S^T9efMC8c iGPl}' );
define( 'AUTH_SALT',        'u$00Fea$Y)SwrfWUG}RR$__@Ems4gn#Xo*m.AJ%D&=|*Qxar}5Ka<?C@#`2T%$|U' );
define( 'SECURE_AUTH_SALT', '?1N.*;=5C(TP(PUbm*s;|r`qTF1=!Q(VPy2Pf:[Wb0[#bWYtS>^1S>}(7sfp_W3[' );
define( 'LOGGED_IN_SALT',   'i@H{6D81QgE}2]U>ty.ppJz{*t_d*1OM?@$461 6)i7RVb=MsC*Iagut0jFb r{>' );
define( 'NONCE_SALT',       '%qHp@Z8JoPFxh}Q05`H#]g0$Z<op~%;t,Su6} xQ!O9aq2cpk+zEm=3VkWj Dm0T' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ribo_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/** Sets up 'direct' method for wordpress, auto update without ftp */
define('FS_METHOD','direct');
