import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node"

require('../include.ts');

export async function action({ request }: ActionArgs) {
	return json({});
}