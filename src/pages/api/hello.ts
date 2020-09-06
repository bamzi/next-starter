// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (
	_req: unknown,
	res: { statusCode: number; json: (arg0: { name: string }) => void },
) => {
	res.statusCode = 200;
	res.json({ name: 'John Doe' });
};
