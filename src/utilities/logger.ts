import Controller from "../controller"

export function makeLogger({ log }: Controller, prefix: string) {
	const format = (msg: string) => `[${prefix}] ${msg}`
	return {
		debug: (msg: string) => log.debug(format(msg)),
		info: (msg: string) => log.info(format(msg)),
		warn: (msg: string) => log.warn(format(msg)),
		error: (msg: string) => log.error(format(msg)),
	}
}
