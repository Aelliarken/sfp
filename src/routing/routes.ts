import { RouteRegistry } from './router';
import { HomeOld } from '../views/HomeOld';
import { Home } from '../views/Home';
import { Lazy } from '../common/Lazy';
import { Dex } from '../views/Dex';

const registry = new RouteRegistry([])
	.addPage('', () => ({ data: null, view: Home }))
	.addPage('/dex', () => ({ data: null, view: Dex }))
	.addPage('/old', () => ({ data: null, view: HomeOld }))

export const router = new Lazy(() => registry.build())