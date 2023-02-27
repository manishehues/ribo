<?php
/**
 * Abstract Class.
 *
 * @package    Logo_Carousel_Free
 * @subpackage Logo_Carousel_Free/sp-framework
 * @author     ShapedPlugin<support@shapedplugin.com>
 */

if ( ! defined( 'ABSPATH' ) ) {
	die;
} // Cannot access directly.

if ( ! class_exists( 'SPLC_FREE_Abstract' ) ) {
	/**
	 *
	 * Abstract Class
	 *
	 * @since 1.0.0
	 * @version 1.0.0
	 */
	abstract class SPLC_FREE_Abstract {

		/**
		 * Abstract
		 *
		 * @var string
		 */
		public $abstract = '';

		/**
		 * Output_css
		 *
		 * @var string
		 */
		public $output_css = '';

		/**
		 * Class constructor
		 *
		 * @return void
		 */
		public function __construct() {
			// Collect output css and typography.
			if ( ! empty( $this->args['output_css'] ) || ! empty( $this->args['enqueue_webfont'] ) ) {
				add_action( 'wp_enqueue_scripts', array( &$this, 'collect_output_css_and_typography' ), 10 );
			}

		}

		/**
		 * Collect output css and typography.
		 *
		 * @return void
		 */
		public function collect_output_css_and_typography() {
			$this->recursive_output_css( $this->pre_fields );
		}

		/**
		 * Recursive output css
		 *
		 * @param  array $fields fields.
		 * @param  array $combine_field combine_field.
		 * @return void
		 */
		public function recursive_output_css( $fields = array(), $combine_field = array() ) {

			if ( ! empty( $fields ) ) {

				foreach ( $fields as $field ) {

					$field_id     = ( ! empty( $field['id'] ) ) ? $field['id'] : '';
					$field_type   = ( ! empty( $field['type'] ) ) ? $field['type'] : '';
					$field_output = ( ! empty( $field['output'] ) ) ? $field['output'] : '';
					$field_check  = ( 'typography' === $field_type || $field_output ) ? true : false;
					$field_class  = 'SPLC_FREE_Field_' . $field_type;

					if ( $field_type && $field_id ) {

						if ( 'fieldset' === $field_type ) {
							if ( ! empty( $field['fields'] ) ) {
								$this->recursive_output_css( $field['fields'], $field );
							}
						}

						if ( class_exists( $field_class ) ) {

							if ( method_exists( $field_class, 'output' ) || method_exists( $field_class, 'enqueue_google_fonts' ) ) {

								$field_value = '';

								if ( $field_check && ( 'options' === $this->abstract || 'customize' === $this->abstract ) ) {

									if ( ! empty( $combine_field ) ) {

										$field_value = ( isset( $this->options[ $combine_field['id'] ][ $field_id ] ) ) ? $this->options[ $combine_field['id'] ][ $field_id ] : '';

									} else {

										$field_value = ( isset( $this->options[ $field_id ] ) ) ? $this->options[ $field_id ] : '';

									}
								} elseif ( $field_check && ( 'metabox' === $this->abstract && is_singular() || 'taxonomy' === $this->abstract && is_archive() ) ) {

									if ( ! empty( $combine_field ) ) {

										$meta_value  = $this->get_meta_value( $combine_field );
										$field_value = ( isset( $meta_value[ $field_id ] ) ) ? $meta_value[ $field_id ] : '';

									} else {

										$meta_value  = $this->get_meta_value( $field );
										$field_value = ( isset( $meta_value ) ) ? $meta_value : '';

									}
								}

								$instance = new $field_class( $field, $field_value, $this->unique, 'wp/enqueue', $this );

								// Typography enqueue and embed google web fonts.
								if ( 'typography' === $field_type && $this->args['enqueue_webfont'] && ! empty( $field_value['font-family'] ) ) {

									$method = ( ! empty( $this->args['async_webfont'] ) ) ? 'async' : 'enqueue';

									$instance->enqueue_google_fonts( $method );

								}

								// Output css.
								if ( $field_output && $this->args['output_css'] ) {
									SPLC::$css .= $instance->output();
								}

								unset( $instance );

							}
						}
					}
				}
			}

		}

	}
}
