//
// date : 2022-12-02
//

L = 0.1;
H = 0.1;
//
// points
//
Point(1)={0, 0, 0};
Point(2)={L, 0, 0};
Point(3)={L, H, 0};
Point(4)={0, H, 0};
//
// lines
//
nx=11; ny=11;
Line(1)={1, 2};
Transfinite Curve{1} = nx;
//
Line(2)={2, 3};
Transfinite Curve{2} = ny;
//
Line(3)={3, 4};
Transfinite Curve{3} = nx;
//
Line(4)={4, 1};
Transfinite Curve{4} = ny;
//
// line loop
//
Line Loop(1)={1,2, 3, 4};
//
// plane surface
//
Plane Surface(1)={1};
//
// Transfinite
//
Transfinite Surface{1};
// Recombine Surface{1};


