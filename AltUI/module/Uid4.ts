export default function Uid4(): string {
  let uid: string = "";
  let i: number;

  for (i = 0; i < 32; i += 1) {
    switch (i) {
      case 8:
      case 20:
        uid += "-";
        uid += ((Math.random() * 16) | 0).toString(16);
        break;
      case 12:
        uid += "-";
        uid += "4";
        break;
      case 16:
        uid += "-";
        uid += ((Math.random() * 4) | 8).toString(16);
        break;
      default:
        uid += ((Math.random() * 16) | 0).toString(16);
    }
  }
  return uid;
}