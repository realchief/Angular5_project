interface Approval {
  vendor: string;
  approved: boolean;
  note: string;
}

export class Naitve {

  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  iab_attr: number[] = [0];
  image_attachment: string = '';
  image_attachment_logo: string = '';
  call_to_action: number = 0;
  headline: string = '';
  description: string = '';
  brand_name: string = '';
  adomain: string = '';
  destination_url: string = '';
  macros_custom_data: string = '';
  username: string = '';
  approvals: Approval[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Display {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  iab_attr: number[] = [0];
  adomain: string = '';
  size: number = 0;
  audio: number = 0;
  html: string = '';
  secure_type: number = 0;
  image_attachment: string = '';
  destination_url: string = '';
  call_to_action: number = 0;
  image_attachment_logo: string = '';
  headline: string = '';
  description: string = '';
  brand_name: string = '';
  video_attachment: string = '';
  video_api_framework: number = 0;
  vast_type: number = 0;
  is_1pas: number = 0;
  video_clickthrough: string = '';
  macros_custom_data: string = '';
  username: string = '';
  approvals: Approval[] = [{
    vendor: '',
    approved: true,
    note: ''
  }];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Video {
  id: number = 0;
  name: string = '';
  user_id: number = 0;
  active: number = 0;
  iab_attr: number[] = [0];
  adomain: string = '';
  size: number = 0;
  audio: number = 0;
  html: string = '';
  secure_type: number = 0;
  image_attachment: string = '';
  destination_url: string = '';
  call_to_action: number = 0;
  image_attachment_logo: string = '';
  headline: string = '';
  description: string = '';
  brand_name: string = '';
  video_attachment: string = '';
  video_api_framework: number = 0;
  vast_type: number = 0;
  is_1pas: number = 0;
  video_clickthrough: string = '';
  macros_custom_data: string = '';
  username: string = '';
  approvals: Approval[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
