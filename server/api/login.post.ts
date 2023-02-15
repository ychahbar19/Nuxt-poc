import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
	useStorage().setItem('users:test', {
		id: 1,
		email: 'test',
		password: 'test',
	});
	const body = await readBody(event);
	const { email, password } = body;

	const config = useRuntimeConfig();
	const cookies = parseCookies(event);

	if (!email || !password) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Error. Please enter the correct username and password',
		});
	}

	const user = await useStorage().getItem('users:' + body.email);
	// const user = {
	// 	id: 1,
	// };
	console.log(user);

	if (!user)
		throw createError({ statusCode: 400, statusMessage: 'User not found' });

	const passwordCompared = body.password === user.password;
	// const passwordCompared = true;
	if (!passwordCompared)
		throw createError({ statusCode: 400, statusMessage: 'Incorrect password' });

	const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
		expiresIn: '1d',
	});

	return {
		accessToken: token,
		status: 200,
	};
	// redis
	// await useStorage().setItem('redis:test', body);
});
