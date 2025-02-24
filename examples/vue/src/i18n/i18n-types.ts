// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'it'

export type Translation = {
	/**
	 * application started
	 */
	'STARTUP': string
	/**
	 * choose locale...
	 */
	'CHOOSE_LOCALE': string
	/**
	 * Recommended IDE setup:
	 */
	'RECOMMENDED_SETUP': string
	/**
	 * count is: {count}
	 * @param {number} count
	 */
	'COUNT': RequiredParams1<'count'>
	/**
	 * Edit <code>{component}</code> to test hot module replacement.
	 * @param {string} component
	 */
	'EDIT': RequiredParams1<'component'>
	/**
	 * Today is {date|weekday}
	 * @param {Date} date
	 */
	'TODAY': RequiredParams1<'date|weekday'>
}

export type TranslationFunctions = {
	/**
	 * application started
	 */
	'STARTUP': () => LocalizedString
	/**
	 * choose locale...
	 */
	'CHOOSE_LOCALE': () => LocalizedString
	/**
	 * Recommended IDE setup:
	 */
	'RECOMMENDED_SETUP': () => LocalizedString
	/**
	 * count is: {count}
	 */
	'COUNT': (arg: { count: number }) => LocalizedString
	/**
	 * Edit <code>{component}</code> to test hot module replacement.
	 */
	'EDIT': (arg: { component: string }) => LocalizedString
	/**
	 * Today is {date|weekday}
	 */
	'TODAY': (arg: { date: Date }) => LocalizedString
}

export type Formatters = {
	'weekday': (value: Date) => unknown
}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>
