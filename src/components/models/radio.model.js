export class RadioItem {
  value = "";
  text = "";
  selected = false;
  constructor(txt, val, sel) {
    this.value = val;
    this.selected = sel;
    this.text = txt;
  }
}
