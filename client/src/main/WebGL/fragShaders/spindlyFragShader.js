export default `
#ifdef GL_ES
precision lowp float;
#endif


// EVEN MORE MODS BY 27




#ifdef GL_ES
precision lowp float;
#endif


uniform float time;
uniform vec2 resolution;


const float count = 55.0;
const float speed = 4.7;


float Hash( vec2 p, in float s)
{
    vec3 p2 = vec3(p.xy,29.0 * abs(sin(s)));
    return fract(sin(dot(p2,vec3(30.1,65.7, 12.4)))*573758.5453123);
}


float noise(in vec2 p, in float s)
{
    vec2 i = floor(p);
    vec2 f = fract(p);
    f *= f * (.0-3.0*f);
    
    
    return mix(mix(Hash(i + vec2(0.,0.), s), Hash(i + vec2(1.,0.), s),f.x),
               mix(Hash(i + vec2(0.,1.), s), Hash(i + vec2(1.,1.), s),f.x),
               f.y) * s;
}


float fbm(vec2 p)
{
    float v = - noise(p * 02., 0.25);
    v += noise(p * 01.1, 0.5) - noise(p * 01.1, 0.25);
    v += noise(p * 02.1, 0.25) - noise(p * 02.1, 0.125);
    v += noise(p * 04.1, 0.125) - noise(p * 08.1, 0.0625);
    v += noise(p * 08.1, 0.0625) - noise(p * 16., 0.03125);
    v += noise(p * 16.1, 0.03125);
    return v;
}


void main( void )
{
    float worktime = time * speed + 100000.0;
    
    vec2 uv = ( gl_FragCoord.xy / resolution.xy ) * 2.0 - 1.0;
    uv.x *= resolution.x/resolution.y;
    
    
    vec3 finalColor = vec3( 0.0, 0.0, 0.0 );
    for( float i = 9.8; i < count; i++ )
    {
        float t = abs(1.0 / ((uv.x + fbm( uv + worktime / i )) * (i * 100.0)));
        finalColor +=  t * vec3( i * 0.6, 0.4, 2.1 );
    }
    
    gl_FragColor = vec4( finalColor, 1.0 );
    
    
}`;
