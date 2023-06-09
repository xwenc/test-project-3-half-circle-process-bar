import { useState } from "react";
import Head from "next/head";
import ProgressTracker from "../components/process-bar";
import EllipseAnimation from "../components/round";

export default function Home() {
  const [process, setProcess] = useState(35);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Head>
        <title>Test project 3 half circle process</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-medium">前端开发测试</h1>
          </div>

          <section className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium">1. 带百分比的圆弧形进度条</h3>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                3 Hours
              </span>
            </div>
            <div className="w-[300px] h-[150px]">
              <ProgressTracker progress={process} />
            </div>
            <div className="pt-4 max-w-[80px]">
              <input
                type="number"
                name="number"
                min={0}
                max={100}
                value={process}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!value) {
                    setProcess(0);
                    return;
                  }
                  if (value >= 0 && value <= 100) {
                    setProcess(value);
                  }
                }}
                className="block w-full rounded-md border p-1.5 text-gray-900 border-gray-300 focus:ring-0"
              />
            </div>
            <div>
              <p>
                这个功能拆开的话包括3个部分: 1. 圆弧形进度条 2.
                进度条上的百分比, 3. 进度条上的刻度. 我使用了SVG来实现这个功能,
                SVG是一种基于XML的矢量图形格式, 可以用来描述二维图形和三维图形.
                首先创建两个Path, 一个是进度条的底色, 一个是进度条的进度.
                然后使用stroke-dasharray和stroke-dashoffset属性来实现进度条的百分比效果.
                最后使用text元素来实现进度条上的刻度.
              </p>
            </div>
            <div>
              <h5>参考资料：</h5>
              <ul>
                <li>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://developer.mozilla.org/zh-CN/docs/Web/SVG"
                  >
                    SVG MDN DOCS
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://juejin.cn/post/6844903798444392455"
                  >
                    SVG：理解stroke-dasharray和stroke-dashoffset属性
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium">2. 点在椭圆上运行的效果</h3>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                2 Hours
              </span>
            </div>
            <div className="w-[300px] h-[250px]">
              <EllipseAnimation />
            </div>
            <div>
              <p>
                这个功能可以拆成2部分, 1. 椭圆的运动轨迹, 2. 点在椭圆上的运动.
                我使用了SVG来实现这个功能, 先用Path画一个椭圆轨迹,
                然后使用animateMotion来实现椭圆的运动轨迹,来实现点在椭圆上的运动.
              </p>
            </div>
            <div>
              <h5>参考资料：</h5>
              <ul>
                <li>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths"
                  >
                    Mozilla path
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion"
                  >
                    Mozilla animateMotion
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-400 hover:underline"
                    href="https://www.webhek.com/post/svg-animate-element/"
                  >
                    SVG里的几个动画元素的用法介绍
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium">
                3. Redux的作用以及如何使用 redux 存储信息
              </h3>
            </div>
            <div>
              <p>
                Redux是一个JavaScript状态容器, 提供可预测化的状态管理.Redux
                的作用是把组件的状态提升到全局, 任何组件都可以访问到状态,
                任何组件都可以修改状态.
              </p>
              <p>
                Reudux是这样储存信息的: <br />
                1. 创建一个store, 2. 创建一个reducer, 3. 创建一个action, 4.
                使用dispatch来触发action, 5. 使用subscribe来监听store的变化.
                <br />
                说明: 1. 使用 Redux 的 createStore
                函数来创建一个包含应用程序状态的存储对象, 也就是Store,
                <br /> 2. reducer是一个函数,
                它定义如何处理操作并更新存储的状态。 <br />
                3. action是一个对象,定义表示如何更新存储状态的操作。
                <br />
                4, 我通常在React中使用React Hooks 来触发一个Action,
                来完成一个状态的更新或者是一个异步操作.
                <br />
                5.异步操作的话还需要用到Redux-Saga,它是一个用于管理应用程序 Side
                Effect 的库, 也就是说它是用来处理异步操作的.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
