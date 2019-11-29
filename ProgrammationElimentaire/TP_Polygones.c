#include <stdio.h>
#include <math.h>

struct polygon_6
{
  int coord1[2];
  int coord2[2];
  int coord3[2];
  int coord4[2];
  int coord5[2];
  int coord6[2];
};

// ? Ver 1
// float calcP6(struct polygon_6 pol)
// {
//   float result = 0;
//   result += sqrt(pow(pol.coord2[1] - pol.coord1[1], 2) + pow(pol.coord2[0] - pol.coord1[0], 2));
//   result += sqrt(pow(pol.coord3[1] - pol.coord2[1], 2) + pow(pol.coord3[0] - pol.coord2[0], 2));
//   result += sqrt(pow(pol.coord4[1] - pol.coord3[1], 2) + pow(pol.coord4[0] - pol.coord3[0], 2));
//   result += sqrt(pow(pol.coord5[1] - pol.coord4[1], 2) + pow(pol.coord5[0] - pol.coord4[0], 2));
//   result += sqrt(pow(pol.coord6[1] - pol.coord5[1], 2) + pow(pol.coord6[0] - pol.coord5[0], 2));
//   result += sqrt(pow(pol.coord1[1] - pol.coord6[1], 2) + pow(pol.coord1[0] - pol.coord6[0], 2));
//   return result;
// };

// ? Ver 2
// double calcP6(struct polygon_6 pol)
// {
//   double result = 0;
//   int
//       x[6] = {pol.coord1[0], pol.coord2[0], pol.coord3[0], pol.coord4[0], pol.coord5[0], pol.coord6[0]},
//       y[6] = {pol.coord1[1], pol.coord2[1], pol.coord3[1], pol.coord4[1], pol.coord5[1], pol.coord6[1]},
//       j;
//   for (int i = 0; i < 6; i++)
//   {
//     j = i + 1;
//     if (j == 6)
//       j = 0;
//     result += sqrt(pow(x[j] - x[i], 2) + pow(y[j] - y[i], 2));
//   }
//   return result;
// };

// ? Ver 3
typedef struct Point Point;
struct Point
{
  double x;
  double y;
};

double calc_polygon(Point *p, int l)
{
  double result = 0;
  int j;
  for (int i = 0; i < l; i++)
  {
    j = (i == l - 1) ? 0 : i + 1;
    result += sqrt(pow(p[j].x - p[i].x, 2) + pow(p[j].y - p[i].y, 2));
  }
  return result;
}

int main()
{
  // ! Ver 1 || Ver 2
  // struct polygon_6 mypolygon = {
  //     {2, 0},
  //     {6, 0},
  //     {10, -2},
  //     {8, -6},
  //     {2, -8},
  //     {0, -4}
  //     };
  // double result = calcP6(mypolygon);
  // ! Ver 3
  Point polygon[] = {
      {2, 0},
      {6, 0},
      {10, -2},
      {8, -6},
      {2, -8},
      {0, -4}};
  double result = calc_polygon(polygon, sizeof(polygon) / sizeof(polygon[0]));
  printf("The Perimeter is -> %.2f\n", result);
  return 0;
}