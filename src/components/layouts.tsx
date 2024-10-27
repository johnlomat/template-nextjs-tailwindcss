import React from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface MainProps {
  children: React.ReactNode
  className?: string
}

export const Main = ({ children, className }: MainProps) => {
  return (
    <React.Fragment>
      <main className={cn('page-content', className)}>{children}</main>
    </React.Fragment>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  rowSpacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const sectionStyle = cva('relative bg-white py-16', {
  variants: {
    rowSpacing: {
      default: 'space-y-7',
      none: 'space-y-0',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8',
      '2xl': 'space-y-10',
    },
  },
  defaultVariants: {
    rowSpacing: 'default',
  },
})

export const Section = ({ children, className, rowSpacing }: SectionProps) => {
  return (
    <React.Fragment>
      <section className={cn(sectionStyle({ rowSpacing }), className)}>{children}</section>
    </React.Fragment>
  )
}

interface ContainerProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  rowSpacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const containerStyle = cva('container w-full md:w-[95%]', {
  variants: {
    fullWidth: {
      true: 'w-full sm:w-full md:w-full lg:w-full xl:w-full max-w-full p-0',
    },
    rowSpacing: {
      default: 'space-y-7',
      none: 'space-y-0',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8',
      '2xl': 'space-y-10',
    },
  },
  defaultVariants: {
    rowSpacing: 'default',
  },
})

export const Container = ({ children, className, fullWidth, rowSpacing }: ContainerProps) => {
  return (
    <React.Fragment>
      <div className={cn(containerStyle({ fullWidth, rowSpacing }), className)}>{children}</div>
    </React.Fragment>
  )
}

interface GridProps {
  children: React.ReactNode
  className?: string
  columns?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  rowSpacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  columnSpacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const gridStyle = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    rowSpacing: {
      default: 'gap-y-7',
      none: 'gap-y-0',
      sm: 'gap-y-2',
      md: 'gap-y-4',
      lg: 'gap-y-6',
      xl: 'gap-y-8',
      '2xl': 'gap-y-10',
    },
    columnSpacing: {
      default: 'gap-x-7',
      none: 'gap-x-0',
      sm: 'gap-x-2',
      md: 'gap-x-4',
      lg: 'gap-x-6',
      xl: 'gap-x-8',
      '2xl': 'gap-x-10',
    },
  },
  defaultVariants: {
    columns: 1,
    rowSpacing: 'default',
    columnSpacing: 'default',
  },
})

export const Grid = ({ children, className, columns, rowSpacing, columnSpacing }: GridProps) => {
  return (
    <React.Fragment>
      <div className={cn(gridStyle({ columns, rowSpacing, columnSpacing }), className)}>
        {children}
      </div>
    </React.Fragment>
  )
}

interface ColSpanProps {
  children: React.ReactNode
  className?: string
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const colSpanVariants = cva('', {
  variants: {
    col: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
    },
    sm: {
      1: 'sm:col-span-1',
      2: 'sm:col-span-2',
      3: 'sm:col-span-3',
      4: 'sm:col-span-4',
      5: 'sm:col-span-5',
      6: 'sm:col-span-6',
      7: 'sm:col-span-7',
      8: 'sm:col-span-8',
      9: 'sm:col-span-9',
      10: 'sm:col-span-10',
      11: 'sm:col-span-11',
      12: 'sm:col-span-12',
    },
    md: {
      1: 'md:col-span-1',
      2: 'md:col-span-2',
      3: 'md:col-span-3',
      4: 'md:col-span-4',
      5: 'md:col-span-5',
      6: 'md:col-span-6',
      7: 'md:col-span-7',
      8: 'md:col-span-8',
      9: 'md:col-span-9',
      10: 'md:col-span-10',
      11: 'md:col-span-11',
      12: 'md:col-span-12',
    },
    lg: {
      1: 'lg:col-span-1',
      2: 'lg:col-span-2',
      3: 'lg:col-span-3',
      4: 'lg:col-span-4',
      5: 'lg:col-span-5',
      6: 'lg:col-span-6',
      7: 'lg:col-span-7',
      8: 'lg:col-span-8',
      9: 'lg:col-span-9',
      10: 'lg:col-span-10',
      11: 'lg:col-span-11',
      12: 'lg:col-span-12',
    },
    xl: {
      1: 'xl:col-span-1',
      2: 'xl:col-span-2',
      3: 'xl:col-span-3',
      4: 'xl:col-span-4',
      5: 'xl:col-span-5',
      6: 'xl:col-span-6',
      7: 'xl:col-span-7',
      8: 'xl:col-span-8',
      9: 'xl:col-span-9',
      10: 'xl:col-span-10',
      11: 'xl:col-span-11',
      12: 'xl:col-span-12',
    },
    xxl: {
      1: '2xl:col-span-1',
      2: '2xl:col-span-2',
      3: '2xl:col-span-3',
      4: '2xl:col-span-4',
      5: '2xl:col-span-5',
      6: '2xl:col-span-6',
      7: '2xl:col-span-7',
      8: '2xl:col-span-8',
      9: '2xl:col-span-9',
      10: '2xl:col-span-10',
      11: '2xl:col-span-11',
      12: '2xl:col-span-12',
    },
  },
  defaultVariants: {
    col: 1,
  },
})

export const ColSpan = ({ children, className, col, sm, md, lg, xl, xxl }: ColSpanProps) => {
  return (
    <React.Fragment>
      <div className={cn(colSpanVariants({ col, sm, md, lg, xl, xxl }), className)}>{children}</div>
    </React.Fragment>
  )
}
