export interface AdvancedOptions {
  samples_save?: boolean;
  samples_format?: string;
  samples_filename_pattern?: string;
  save_images_add_number?: boolean;
  grid_save?: boolean;
  grid_format?: string;
  grid_extended_filename?: boolean;
  grid_only_if_multiple?: boolean;
  grid_prevent_empty_spots?: boolean;
  n_rows?: number;
  enable_pnginfo?: boolean;
  save_txt?: boolean;
  save_images_before_face_restoration?: boolean;
  save_images_before_highres_fix?: boolean;
  save_images_before_color_correction?: boolean;
  jpeg_quality?: number;
  export_for_4chan?: boolean;
  use_original_name_batch?: boolean;
  use_upscaler_name_as_suffix?: boolean;
  save_selected_only?: boolean;
  do_not_add_watermark?: boolean;
  temp_dir?: string;
  clean_temp_dir_at_start?: boolean;
  outdir_samples?: string;
  outdir_txt2img_samples?: string;
  outdir_img2img_samples?: string;
  outdir_extras_samples?: string;
  outdir_grids?: string;
  outdir_txt2img_grids?: string;
  outdir_img2img_grids?: string;
  outdir_save?: string;
  save_to_dirs?: boolean;
  grid_save_to_dirs?: boolean;
  use_save_to_dirs_for_ui?: boolean;
  directories_filename_pattern?: string;
  directories_max_prompt_words?: number;
  ESRGAN_tile?: number;
  ESRGAN_tile_overlap?: number;
  realesrgan_enabled_models?: string[];
  upscaler_for_img2img?: string;
  ldsr_steps?: number;
  ldsr_cached?: boolean;
  SWIN_tile?: number;
  SWIN_tile_overlap?: number;
  face_restoration_model?: string;
  code_former_weight?: number;
  face_restoration_unload?: boolean;
  show_warnings?: boolean;
  memmon_poll_rate?: number;
  samples_log_stdout?: boolean;
  multiple_tqdm?: boolean;
  print_hypernet_extra?: boolean;
  unload_models_when_training?: boolean;
  pin_memory?: boolean;
  save_optimizer_state?: boolean;
  save_training_settings_to_txt?: boolean;
  dataset_filename_word_regex?: string;
  dataset_filename_join_string?: string;
  training_image_repeats_per_epoch?: number;
  training_write_csv_every?: number;
  training_xattention_optimizations?: boolean;
  training_enable_tensorboard?: boolean;
  training_tensorboard_save_images?: boolean;
  training_tensorboard_flush_every?: number;
  sd_model_checkpoint?: string;
  sd_checkpoint_cache?: number;
  sd_vae_checkpoint_cache?: number;
  sd_vae?: string;
  sd_vae_as_default?: boolean;
  inpainting_mask_weight?: number;
  initial_noise_multiplier?: number;
  img2img_color_correction?: boolean;
  img2img_fix_steps?: boolean;
  img2img_background_color?: string;
  enable_quantization?: boolean;
  enable_emphasis?: boolean;
  enable_batch_seeds?: boolean;
  comma_padding_backtrack?: number;
  CLIP_stop_at_last_layers?: number;
  upcast_attn?: boolean;
  use_old_emphasis_implementation?: boolean;
  use_old_karras_scheduler_sigmas?: boolean;
  use_old_hires_fix_width_height?: boolean;
  interrogate_keep_models_in_memory?: boolean;
  interrogate_return_ranks?: boolean;
  interrogate_clip_num_beams?: number;
  interrogate_clip_min_length?: number;
  interrogate_clip_max_length?: number;
  interrogate_clip_dict_limit?: number;
  interrogate_clip_skip_categories?: string[];
  interrogate_deepbooru_score_threshold?: number;
  deepbooru_sort_alpha?: boolean;
  deepbooru_use_spaces?: boolean;
  deepbooru_escape?: boolean;
  deepbooru_filter_tags?: string;
  extra_networks_default_view?: string;
  extra_networks_default_multiplier?: number;
  sd_hypernetwork?: string;
  sd_lora?: string;
  lora_apply_to_outputs?: boolean;
  return_grid?: boolean;
  do_not_show_images?: boolean;
  add_model_hash_to_info?: boolean;
  add_model_name_to_info?: boolean;
  disable_weights_auto_swap?: boolean;
  send_seed?: boolean;
  send_size?: boolean;
  font?: string;
  js_modal_lightbox?: boolean;
  js_modal_lightbox_initially_zoomed?: boolean;
  show_progress_in_title?: boolean;
  samplers_in_dropdown?: boolean;
  dimensions_and_batch_together?: boolean;
  keyedit_precision_attention?: number;
  keyedit_precision_extra?: number;
  quicksettings?: string;
  ui_reorder?: string;
  ui_extra_networks_tab_reorder?: string;
  localization?: string;
  show_progressbar?: boolean;
  live_previews_enable?: boolean;
  show_progress_grid?: boolean;
  show_progress_every_n_steps?: number;
  show_progress_type?: string;
  live_preview_content?: string;
  live_preview_refresh_period?: number;
  hide_samplers?: string[];
  eta_ddim?: number;
  eta_ancestral?: number;
  ddim_discretize?: string;
  s_churn?: number;
  s_tmin?: number;
  s_noise?: number;
  eta_noise_seed_delta?: number;
  always_discard_next_to_last_sigma?: boolean;
  postprocessing_enable_in_main_ui?: string[];
  postprocessing_operation_order?: string[];
  upscaling_max_images_in_cache?: number;
  disabled_extensions?: string[];
  sd_checkpoint_hash?: string;
  images_history_preload?: boolean;
  images_record_paths?: boolean;
  images_delete_message?: boolean;
  images_history_page_columns?: number;
  images_history_page_rows?: number;
  images_history_pages_perload?: number;
}
