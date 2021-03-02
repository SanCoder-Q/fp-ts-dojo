import * as o from 'fp-ts/Option';
import * as io from 'fp-ts/IO';
import { flow, constant } from 'fp-ts/function';

export const greet = (): o.Option<string> => o.some('Hello, world');
const app: io.IO<void> = flow(greet, o.getOrElse(constant('')), console.log);

app();
