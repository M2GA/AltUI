export default async function Wait(time: number): Promise<void> {
  return new Promise(function (success) {
      setTimeout(() => {
          success();
      }, time);
  });
}