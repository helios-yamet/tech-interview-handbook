import { EducationBackgroundType } from './types';

export const emptyOption = '----';

// TODO: use enums
export const titleOptions = [
  {
    label: 'Software Engineer',
    value: 'Software Engineer',
  },
  {
    label: 'Frontend Engineer',
    value: 'Frontend Engineer',
  },
  {
    label: 'Backend Engineer',
    value: 'Backend Engineer',
  },
  {
    label: 'Full-stack Engineer',
    value: 'Full-stack Engineer',
  },
];

export const locationOptions = [
  {
    label: 'Singapore, Singapore',
    value: 'Singapore, Singapore',
  },
  {
    label: 'New York, US',
    value: 'New York, US',
  },
  {
    label: 'San Francisco, US',
    value: 'San Francisco, US',
  },
];

export const internshipCycleOptions = [
  {
    label: 'Summer',
    value: 'Summer',
  },
  {
    label: 'Winter',
    value: 'Winter',
  },
  {
    label: 'Spring',
    value: 'Spring',
  },
  {
    label: 'Fall',
    value: 'Fall',
  },
  {
    label: 'Full year',
    value: 'Full year',
  },
];

export const yearOptions = [
  {
    label: '2021',
    value: 2021,
  },
  {
    label: '2022',
    value: 2022,
  },
  {
    label: '2023',
    value: 2023,
  },
  {
    label: '2024',
    value: 2024,
  },
];

export const educationLevelOptions = Object.entries(
  EducationBackgroundType,
).map(([, value]) => ({
  label: value,
  value,
}));

export const educationFieldOptions = [
  {
    label: 'Computer Science',
    value: 'Computer Science',
  },
  {
    label: 'Information Security',
    value: 'Information Security',
  },
  {
    label: 'Information Systems',
    value: 'Information Systems',
  },
  {
    label: 'Business Analytics',
    value: 'Business Analytics',
  },
  {
    label: 'Data Science and Analytics',
    value: 'Data Science and Analytics',
  },
];

export enum FieldError {
  NonNegativeNumber = 'Please fill in a non-negative number in this field.',
  Number = 'Please fill in a number in this field.',
  Required = 'Please fill in this field.',
}

export const OVERALL_TAB = 'Overall';
