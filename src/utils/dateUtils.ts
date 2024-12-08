import { format, isValid, parseISO } from 'date-fns';

export const formatMatchDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      return 'Invalid date';
    }
    return format(date, 'dd MMM yyyy');
  } catch {
    return 'Invalid date';
  }
};