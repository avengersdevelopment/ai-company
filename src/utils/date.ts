export const calculateEstimatedTime = (endedAt: string): string => {
  const endTime = new Date(endedAt);
  const currentTime = new Date();
  const diffInHours = Math.round(
    (endTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60),
  );

  return `${diffInHours} Hours`;
};
