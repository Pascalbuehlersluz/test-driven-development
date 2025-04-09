export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Duration can't be minus");}
 
  let stunden = Math.floor(seconds / 3600);
  seconds %= 3600;

  let minuten = Math.floor(seconds / 60);
  seconds = Math.round(seconds % 60);
 
  if (seconds === 60) 
  {
    seconds = 0;
    minuten += 1;
  }
 
  if (minuten === 60) {
    minuten = 0;
    stunden += 1;}
 
  let result = "";
  if (stunden > 0) {
    result += `${stunden}h`;
  }
  if (minuten > 0 || stunden > 0) {
    result += `${minuten}m`;
  }
  result += `${seconds}s`;
 
  return result;
}