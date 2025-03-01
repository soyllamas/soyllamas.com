import {readFileSync} from 'fs';
import {join} from 'path';
import type {RequestHandler} from './$types';

export const GET: RequestHandler = async () => {
    // Path to static HTML file (relative to project root)
    const filePath = join(process.cwd(), 'static', 'build-dev.html');

    // Read the file
    const content = readFileSync(filePath, 'utf-8');

    // Return with CORS headers
    return new Response(content, {
        headers: {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
};

// Handle OPTIONS requests for CORS preflight
export const OPTIONS: RequestHandler = async () => {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
};
