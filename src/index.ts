import { Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

app.post('/api/channels', async(c) => {
	// TODO...make this create a live input
	const whipUrl = "https://customer-vmoocz19hv6zb932.cloudflarestream.com/5bfd96a7323d3795bbf30afffb28a318kc27ade28e00b4e501c0a75c648d45580/webRTC/publish";
	const whepUrl = "https://customer-vmoocz19hv6zb932.cloudflarestream.com/c27ade28e00b4e501c0a75c648d45580/webRTC/play"
    return c.json({whipUrl, whepUrl});
});

export default app;
