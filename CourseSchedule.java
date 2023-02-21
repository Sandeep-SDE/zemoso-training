package AdavanceDSA.Graphs;

import java.util.ArrayList;
import java.util.HashMap;


/**
 *
 *      Algorithm
 *
 *     Step1 : According to the given statement like for learn a course we need complete the prerequisite.
 *          like        for course         A ===> B
 *              to Indicate this structure I use Graph Data structure
 *     step2 : Implement the Graph for the given courses accordingly
 *              the graph is                0 --------> 1
 *                                          \             \
 *                                           3 ---> 5 <---- 2
 *                                            \              \
 *                                            4 -----> 7 <---- 6
 *                                                      /\
 *                                                     /  \
 *                                                    8    9
 *     Step3 : by using hash map so every course is has its prerequisite
 *     Step4 : base on the map traversal of every key->value of recursively we can get the list courses.
 *
 *                  ex : if we want to learn course 4 ====> 3 , 0, recursive call will maintain the order of the courses.
 *
 */

class CourseSchedule {
    static void addEdge(ArrayList<ArrayList<Integer> > adj, int src, int dest) {
        adj.get(src).add(dest);
    }
    static HashMap<Integer,Integer> printGraph(ArrayList<ArrayList<Integer> > adj, HashMap<Integer,Integer> map) {
        for (int i = 0; i < adj.size(); i++) {
            for (int j = 0; j < adj.get(i).size(); j++) {
                map.put(adj.get(i).get(j),i);
            }
        }
        return map;
    }

    public static void main(String[] args)
    {
        int V = 10;
        ArrayList<ArrayList<Integer> > adj = new ArrayList<>(V);
        HashMap<Integer,Integer> map = new HashMap<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
            map.put(i,null);
        }

        addEdge(adj, 0, 1);
        addEdge(adj, 0, 3);
        addEdge(adj, 1, 2);
        addEdge(adj, 2, 6);
        addEdge(adj, 2, 5);
        addEdge(adj, 3, 4);
        addEdge(adj, 3, 5);
        addEdge(adj, 4, 7);
        addEdge(adj, 6, 7);
        addEdge(adj, 7, 8);
        addEdge(adj, 7, 9);

        map = printGraph(adj,map);
        System.out.println(map);
        System.out.println(preCourse(map,new ArrayList<>(),7));
    }

    private static ArrayList<Integer> preCourse(HashMap<Integer, Integer> map,ArrayList<Integer> list, int c) {
        if(map.get(c)==null){
            return null;
        }
        list.add(map.get(c));
        preCourse(map,list,map.get(c));
        return  list;
    }
