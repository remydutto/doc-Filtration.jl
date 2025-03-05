var documenterSearchIndex = {"docs":
[{"location":"references.html#References","page":"References","title":"References","text":"","category":"section"},{"location":"references.html#Cited-References","page":"References","title":"Cited References","text":"","category":"section"},{"location":"references.html","page":"References","title":"References","text":"The following references are cited in the documentation.","category":"page"},{"location":"references.html","page":"References","title":"References","text":"B. Benyahia, A. Charfi, N. Benamar, M. Heran, A. Grasmick, B. Cherki, J. Harmand (2013). A simple model of anaerobic membrane bioreactor for control design: coupling the “AM2b” model with a simple membrane fouling dynamics, World Congress on Anerobic Digestion: Recovering (bio) Ressources for the World\nN.G. Cogan, S. Chellam (2014) A method for determining the optimal back-washing frequency and duration for dead-end microfiltration, Journal of Membrane Science\nN.G. Cogan, J. Li, A. R. Badireddy, S. Chellam (2016) Optimal backwashing in dead-end bacterial microfiltration with irreversible attachment mediated by extracellular polymeric substances production, Journal of Membrane Science\nN. Kalboussi, A. Rapaport, T. Bayen, N. Ben Amar, F. Ellouze, J. Harmand (2017) Optimal control of a membrane filtration system, IFAC-PapersOnLine\nN. Kalboussi, J. Harmand, A. Rapaport, T. Bayen, F. Ellouze, N. Ben Amar (2018) Optimal control of physical backwash strategy - towards the enhancement of membrane filtration process performance, Journal of Membrane Science","category":"page"},{"location":"dev-filtration.html#dev-filtration","page":"Developpers","title":"Filtration.jl private functions","text":"","category":"section"},{"location":"dev-filtration.html","page":"Developpers","title":"Developpers","text":"CollapsedDocStrings = true","category":"page"},{"location":"dev-filtration.html#Index","page":"Developpers","title":"Index","text":"","category":"section"},{"location":"dev-filtration.html","page":"Developpers","title":"Developpers","text":"Pages   = [\"dev-filtration.md\"]\nModules = [Filtration]\nOrder   = [:type, :module, :constant, :type, :function, :macro]","category":"page"},{"location":"dev-filtration.html#Documentation","page":"Developpers","title":"Documentation","text":"","category":"section"},{"location":"dev-filtration.html","page":"Developpers","title":"Developpers","text":"Modules = [Filtration]\nOrder   = [:type, :module, :constant, :type, :function, :macro]\nPublic  = false","category":"page"},{"location":"examples.html#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"using Filtration\nusing Plots","category":"page"},{"location":"examples.html#Benyahia-et-al.-Model","page":"Examples","title":"Benyahia et al. Model","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"In the [Benyahia et al., 2013] model, functions f_1, f_2 and g are given by ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"f_1(m) = fracbe+m quad f_2(m) = am quad g(m) = frac1e+m ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"where a, b and e are positive numbers. Functions f_+, f_-, g_+ and g_- are given by ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"f_+(m) = fracf_1(m) + f_2(m)2 quad f_-(m) = fracf_1(m) - f_2(m)2 quad g_+(m) = g(m) quad g_-(m) = 0 ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"tlim = (0,10); mlim = (0,10)\na = 1; b = 1; e = 1\nf₁(m) = b / (e + m)\nf₂(m) = a * m\ng(m)  = 1 / (e + m)\n\nf₊(m) = 0.5*(f₁(m) + f₂(m))\nf₋(m) = 0.5*(f₁(m) - f₂(m))\ng₊(m) = g(m)\ng₋(m) = 0\n\nmodel = MaxVolume(f₊, f₋, g₊, g₋)\nplot_synthesis(model, tlim, mlim)","category":"page"},{"location":"examples.html#Cogan-Chellamb-model","page":"Examples","title":"Cogan-Chellamb model","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The following functions have been proposed in [Cogan and Chellamb, 2014] and [Cogan and al., 2016]","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"f_1(m) = fracbe+m quad f_2(m) = fracame+m quad g(m) = frac1e+m","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"where a, b and e are positive numbers. Functions f_+, f_-, g_+ and g_- are given by ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"f_+(m) = fracf_1(m) + f_2(m)2 quad f_-(m) = fracf_1(m) - f_2(m)2 quad g_+(m) = g(m) quad g_-(m) = 0 ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"tlim = (0,40); mlim = (0,10)\na = 1; b = 1; e = 1\n\nf₁(m) = b ./ (e .+ m)\nf₂(m) = (a .* m) ./ (e .+ m)\ng(m) = 1 ./ (e .+ m)\n\nf₊(m) = 0.5*(f₁(m) + f₂(m))\nf₋(m) = 0.5*(f₁(m) - f₂(m))\ng₊(m) = g(m)\ng₋(m) = 0\n\nmodel = MaxVolume(f₊, f₋, g₊, g₋)\nplot_synthesis(model, tlim, mlim)","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"We can use parameters given in [Kalboussi et al., 2018], computed from more complex model, for variable backswash flux. ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"tlim = (0, 0.25); mlim = (0,10)\na₂ = 0.64; b = 490.07; d = 4125.6; e = 18.06\n\nf₁(m) = b./ (e .+ m)\nf₂(m) = (a₂ * d * m) ./ (e .+ m)\ng(m) = d ./ (e .+ m)\n\nf₊(m) = 0.5*(f₁(m) + f₂(m))\nf₋(m) = 0.5*(f₁(m) - f₂(m))\ng₊(m) = g(m)\ng₋(m) = 0\n\nmodel = MaxVolume(f₊, f₋, g₊, g₋)\nplot_synthesis(model, tlim, mlim)","category":"page"},{"location":"examples.html#Kalboussi-et-al.-model","page":"Examples","title":"Kalboussi et al. model","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"The following function has been proposed in [Kalboussi et al., 2018] for constant backwash flux  ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"f_1(m) = fracbe+m quad f_2(m) = a_1 m quad g_1(m) = fracde + m quad g_2(m) = fraca_1a_2 ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"where a_1, a_2, b, d and e are positive number with the following value, computed from a more complex model. Functions f_+, f_-, g_+ and g_- are given by ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"f_+(m) = fracf_1(m) + f_2(m)2 quad f_-(m) = fracf_1(m) - f_2(m)2 quad g_+(m) = fracg_1(m) + g_2(m)2 quad g_-(m) = fracg_1(m) - g_2(m)2 ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"tlim = (0, 0.25); mlim = (0,10)\na₁ = 91.7; a₂ = 0.64; b = 490.07; d = 4125.6; e = 18.06\n\nf₁(m) = b ./ (e .+ m)\nf₂(m) = a₁ .* m\ng₁(m) = d ./ (e.+ m)\ng₂(m) = a₁ ./ a₂\n\nf₊(m) = 0.5*(f₁(m) + f₂(m))\nf₋(m) = 0.5*(f₁(m) - f₂(m))\ng₊(m) = 0.5*(g₁(m) + g₂(m))\ng₋(m) = 0.5*(g₁(m) - g₂(m))\n\nmodel = MaxVolume(f₊, f₋, g₊, g₋)\nplot_synthesis(model, tlim, mlim)","category":"page"},{"location":"index.html#Filtration-Package","page":"Introduction","title":"Filtration Package","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Documentation for Filtration.jl package.","category":"page"},{"location":"index.html#Dependencies","page":"Introduction","title":"Dependencies","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"All the numerical simulations to generate this documentation are performed with the following packages.","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"using Pkg\nPkg.status()","category":"page"},{"location":"api-filtration.html#Filtration.jl-API","page":"API","title":"Filtration.jl API","text":"","category":"section"},{"location":"api-filtration.html","page":"API","title":"API","text":"CollapsedDocStrings = true","category":"page"},{"location":"api-filtration.html","page":"API","title":"API","text":"For the developers, here are the private methods.","category":"page"},{"location":"api-filtration.html#Index","page":"API","title":"Index","text":"","category":"section"},{"location":"api-filtration.html","page":"API","title":"API","text":"Pages   = [\"api-filtration.md\"]\nModules = [Filtration]\nOrder   = [:module, :constant, :type, :function, :macro]","category":"page"},{"location":"api-filtration.html#Documentation","page":"API","title":"Documentation","text":"","category":"section"},{"location":"api-filtration.html","page":"API","title":"API","text":"Modules = [Filtration]\nOrder   = [:module, :constant, :type, :function, :macro]\nPrivate = false","category":"page"},{"location":"api-filtration.html#Filtration.Filtration","page":"API","title":"Filtration.Filtration","text":"Filtration module.\n\nLists all the imported modules and packages:\n\nBase\nCore\nDocStringExtensions\nForwardDiff\nLaTeXStrings\nMINPACK\nNemo\nOptimalControl\nOrdinaryDiffEq\nPlots\nRoots\nSymbolics\n\nList of all the exported names:\n\nMaxVolume\nMinEnergy\ncuts\ndispersial_locus\nindirect_solve\nindirect_solve_MP\nindirect_solve_MSP\nindirect_solve_P\nindirect_solve_PSP\nplot_synthesis\nswitching_locus\n\n\n\n\n\n","category":"module"},{"location":"api-filtration.html#Filtration.MaxVolume","page":"API","title":"Filtration.MaxVolume","text":"Type of a MaxVolume model, composed by:\n\nf₊ : the function f_+(m)\nf₋ : the function f_-(m)\ng₊ : the function g_+(m)\ng₋ : the function g_-(m)\ndynamics : the cost and state dynamics function\ndynamics! : the cost and state dynamics function\ndf₊ : the function f_+(m), compute thanks to ForwardDiff package\ndf₋ : the function f_-(m), compute thanks to ForwardDiff package\ndg₊ : the function g_+(m), compute thanks to ForwardDiff package\ndg₋ : the function g_-(m), compute thanks to ForwardDiff package\nmₛ : the singular state m_s\nuₛ : the singular control u_s\nλₛ : the singular costate lambda_s\nΔt : the value Delta t = t_f - T, where T is the final time to leave the singular arc\n\n\n\n\n\n","category":"type"},{"location":"api-filtration.html#Filtration.MaxVolume-NTuple{4, Function}","page":"API","title":"Filtration.MaxVolume","text":"MaxVolume(\n    f₊::Function,\n    f₋::Function,\n    g₊::Function,\n    g₋::Function\n) -> MaxVolume\n\n\nConstructor for MaxVolume structure. \n\nArguments\n\nf₊ : the function f_+(m)\nf₋ : the function f_-(m)\ng₊ : the function g_+(m)\ng₋ : the function g_-(m)\n\nReturns\n\nmodel : the MaxVolume model\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.MinEnergy","page":"API","title":"Filtration.MinEnergy","text":"Type of a MinEnergy model, composed by:\n\nf₊ : the function f_+(m)\nf₋ : the function f_-(m)\ng₊ : the function g_+(m)\ng₋ : the function g_-(m)\ne₊ : the function e_+(m)\ne₋ : the function e_-(m)\ndynamics : the cost and state dynamics function\ndynamics! : the cost and state dynamics function\ndf₊ : the function f_+(m), compute thanks to ForwardDiff package\ndf₋ : the function f_-(m), compute thanks to ForwardDiff package\ndg₊ : the function g_+(m), compute thanks to ForwardDiff package\ndg₋ : the function g_-(m), compute thanks to ForwardDiff package\nde₊ : the function e_+(m), compute thanks to ForwardDiff package\nde₋ : the function e_-(m), compute thanks to ForwardDiff package\nmₛ : the singular state m_s\nuₛ : the singular control u_s\nλₘₛ : the singular costate lambda_ms associated to the state m\nλᵥ : the constant costate lambda_v associated to the state v\nΔv : the value Delta_v = v^star - v(T), where T is the final time to leave the singular arc\nΔt : the value Delta t = t_f - T, where T is the final time to leave the singular arc\n\n\n\n\n\n","category":"type"},{"location":"api-filtration.html#Filtration.MinEnergy-NTuple{6, Function}","page":"API","title":"Filtration.MinEnergy","text":"MinEnergy(\n    f₊::Function,\n    f₋::Function,\n    g₊::Function,\n    g₋::Function,\n    e₊::Function,\n    e₋::Function\n) -> MinEnergy\n\n\nConstructor for MinEnergy structure. \n\nArguments\n\nf₊ : the function f_+(m)\nf₋ : the function f_-(m)\ng₊ : the function g_+(m)\ng₋ : the function g_-(m)\ne₊ : the function e_+(m)\ne₋ : the function e_-(m)\n\nReturns\n\nmodel : the MinEnergy model\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.cuts-Tuple{MaxVolume, Tuple{Real, Real}, Tuple{Real, Real}}","page":"API","title":"Filtration.cuts","text":"cuts(\n    model::MaxVolume,\n    tlim::Tuple{Real, Real},\n    mlim::Tuple{Real, Real}\n) -> Tuple{Any, Any}\n\n\nCompute the cuts m_-(t) and m_+(t), which corresponds to the curves which leads to m_s  at time T. The function m is the solution on 0 T of\n\nleft beginarrayll     dot v = g_-(m) - g_+(m)  quad v(T) = 0 dot m = f_-(m) - f_+(m)  quad m(T) = m_s endarray  ight \n\nand the function m is the solution on 0 T of \n\nleftbeginarrayll     dot v = g_-(m) + g_+(m)  quad v(T) = 0  dot m = f_-(m) + f_+(m)  quad m(T) = m_s endarray right\n\nwhere T = t_f - Delta t corresponds to the optimal time to exit the singular arc  and m_s the singular state.    \n\nwarning: Warning\nThe cost v(T) at the initial time T is initialized to 0. \n\nArguments\n\nmodel : a MaxVolume\ntlim : tuple of real which corresponds to the limits of time t\nmlim : tuple of real which corresponds to the limits of mass m\n\nReturns\n\ncut₋ : the function m_-, as an ODESolution\ncut₊ : the function m_+, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.cuts-Tuple{MinEnergy, Tuple{Real, Real}, Tuple{Real, Real}}","page":"API","title":"Filtration.cuts","text":"cuts(\n    model::MinEnergy,\n    vlim::Tuple{Real, Real},\n    mlim::Tuple{Real, Real}\n) -> Tuple{Any, Any}\n\n\nCompute the cuts m_-(t) and m_+(t), which corresponds to the curves which leads to m_s  at time T. The function m is the solution on T tf of\n\nleft beginarrayll     dot e = e_-(m) - e_+(m)  quad e(T) = 0 dot m = f_-(m) - f_+(m)  quad m(T) = m_s dot v = g_-(m) - g_+(m)  quad v(T) = v_T endarray  ight \n\nand the function m is the solution on [T, tf] of \n\nleftbeginarrayll     dot e = e_-(m) + e_+(m)  quad e(T) = 0 dot m = f_-(m) + f_+(m)  quad m(T) = m_s dot v = g_-(m) + g_+(m)  quad v(T) = v_T endarray right\n\nwhere T = t_f - Delta t corresponds to the optimal time to exit the singular arc, v_T = v^star - Delta_v the associated state v and m_s the singular state.   \n\nwarning: Warning\nThe cost e(T) at time T is initialized to 0. \n\nArguments\n\nmodel : a MinEnergy\nvlim : tuple of real which corresponds to the limits of volume v\nmlim : tuple of real which corresponds to the limits of mass m \n\nReturns\n\ncut₋ : the function m_-, as an ODESolution\ncut₊ : the function m_+, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.indirect_solve-Tuple{MaxVolume, Real, Real, Real}","page":"API","title":"Filtration.indirect_solve","text":"indirect_solve(\n    model::MaxVolume,\n    t0::Real,\n    tf::Real,\n    m0::Real\n) -> Any\n\n\nSolve the optimal control problem associated to the membrane filtration model by indirect shooting.\n\nArguments\n\nmodel : a MaxVolume\nt0 : the initial time t_0\ntf : the final time t_f\nm0 : the initial state m(t_0)\n\nReturns\n\nsol: the solution, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.indirect_solve_MP-Tuple{MaxVolume, Real, Real, Real, Tuple{Real, Real}, Tuple{Real, Real}}","page":"API","title":"Filtration.indirect_solve_MP","text":"indirect_solve_MP(\n    model::MaxVolume,\n    t0::Real,\n    tf::Real,\n    m0::Real,\n    tlim::Tuple{Real, Real},\n    mlim::Tuple{Real, Real}\n) -> Any\n\n\nSolve the optimal control problem associated to the membrane filtration model by indirect shooting,  with the structure given by u_- circ u_+.\n\nArguments\n\nmodel : a MaxVolume\nt0 : the initial time t_0\ntf : the final time t_f\nm0 : the initial state m(t_0)\ntlim : tuple of real which corresponds to the limits of time t\nmlim : tuple of real which corresponds to the limits of mass m\n\nReturns\n\nsol: the solution, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.indirect_solve_MSP-Tuple{MaxVolume, Real, Real, Real}","page":"API","title":"Filtration.indirect_solve_MSP","text":"indirect_solve_MSP(\n    model::MaxVolume,\n    t0::Real,\n    tf::Real,\n    m0::Real\n) -> Any\n\n\nSolve the optimal control problem associated to the membrane filtration model with the structure given by u_- circ u_s circ u_+.\n\nArguments\n\nmodel : a MaxVolume\nt0 : the initial time t_0\ntf : the final time t_f\nm0 : the initial state m(t_0)\n\nReturns\n\nsol: the solution, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.indirect_solve_P-Tuple{MaxVolume, Real, Real, Real}","page":"API","title":"Filtration.indirect_solve_P","text":"indirect_solve_P(\n    model::MaxVolume,\n    t0::Real,\n    tf::Real,\n    m0::Real\n) -> Any\n\n\nSolve the optimal control problem associated to the membrane filtration model with the structure given by u_+.\n\nArguments\n\nmodel : a MaxVolume\nt0 : the initial time t_0\ntf : the final time t_f\nm0 : the initial state m(t_0)\n\nReturns\n\nsol: the solution, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.indirect_solve_PSP-Tuple{MaxVolume, Real, Real, Real}","page":"API","title":"Filtration.indirect_solve_PSP","text":"indirect_solve_PSP(\n    model::MaxVolume,\n    t0::Real,\n    tf::Real,\n    m0::Real\n) -> Any\n\n\nSolve the optimal control problem associated to the membrane filtration model by indirect shooting,  with the structure given by u_+ circ u_s circ u_+\n\nArguments\n\nmodel : a MaxVolume\nt0 : the initial time t_0\ntf : the final time t_f\nm0 : the initial state m(t_0)\n\nReturns\n\nsol: the solution, as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.plot_synthesis-Tuple{MaxVolume, Tuple{Real, Real}, Tuple{Real, Real}}","page":"API","title":"Filtration.plot_synthesis","text":"plot_synthesis(\n    model::MaxVolume,\n    tlim::Tuple{Real, Real},\n    mlim::Tuple{Real, Real}\n) -> Plots.Plot\n\n\nPlot the optimal synthesis of a MaxVolume.\n\nArguments\n\nmodel : a MaxVolume\ntlim : tuple of real which corresponds to the limits of time t\nmlim : tuple of real which corresponds to the limits of mass m\n\nReturns\n\nplt : the plot\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.plot_synthesis-Tuple{MinEnergy, Tuple{Real, Real}, Tuple{Real, Real}}","page":"API","title":"Filtration.plot_synthesis","text":"plot_synthesis(\n    model::MinEnergy,\n    vlim::Tuple{Real, Real},\n    mlim::Tuple{Real, Real}\n) -> Plots.Plot\n\n\nPlot the optimal synthesis of a MinEnergy.\n\nArguments\n\nmodel : a MinEnergy\nvlim : tuple of real which corresponds to the limits of time v\nmlim : tuple of real which corresponds to the limits of mass m\n\nReturns\n\nplt : the plot\n\n\n\n\n\n","category":"method"},{"location":"api-filtration.html#Filtration.switching_locus-Tuple{MaxVolume, Tuple{Real, Real}, Tuple{Real, Real}}","page":"API","title":"Filtration.switching_locus","text":"switching_locus(\n    model::MaxVolume,\n    tlim::Tuple{Real, Real},\n    mlim::Tuple{Real, Real}\n) -> Any\n\n\nCompute the function S(m) which give the time with respect to the deposit mass m which belongs to the switching locus. This function is the solution of \n\nS(m) = frac1f_+(m) + f_-(m) - frac gamma(m)tilde g(m_T(m)) (f_+(m_T(m)) + f_-(m_T(m))) quad S(mₛ) = T \n\nwhere m_T(m) = tilde g^-1(gamma(m)), tilde g(m) = g_-(m) + g_+(m),  T = t_f - Delta t and \n\ngamma(m) = - fracf_-(m) g_+(m)f_+(m) + g_-(m)\n\nThe value of tilde g^-1(y) is numerically comute by solving tilde g(x) - y = 0.   \n\nArguments\n\nmodel : a MaxVolume\ntlim : tuple of real which corresponds to the limits of time t\nmlim : tuple of real which corresponds to the limits of mass m\n\nReturns\n\nswitching_locus : the function S(m), as an ODESolution\n\n\n\n\n\n","category":"method"},{"location":"basic-example.html#Description-of-the-problem","page":"Basic Example","title":"Description of the problem","text":"","category":"section"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"Let us consider the membrane filtration process where the goal is to maximize the water net production ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"    max_x(cdot) u(cdot) int_0^T u(t) g_+(m(t)) + g_-(m(t)) ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"where the control u(cdot) in mathrm L^infty(0T mathbb R) corresponds to the filtration mode (1 during filtration and -1 during backwash) and the state m (cdot) in mathrmAC(0 T mathbb R) is the mass of the cake layer formed during the water filtration. The dynamic of this state is given by ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"    dot m(t) = u(t) f_+(m(t)) + f_-(m(t)) quad t in t_0 t_f","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"with the initial condition m(0) = m_0. ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"First, we need to have the Filtration.jl package. To solve problems by indirect methods, we use OptimalControl.jl package and MadNLP.jl.  We will also need to import the Plots.jl package.","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"using Filtration\nusing OptimalControl\nusing Plots\nusing MadNLP\nnothing; # hide","category":"page"},{"location":"basic-example.html#Example","page":"Basic Example","title":"Example","text":"","category":"section"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"In this example, these functions are defined by using the [Benyahia et al., 2013] model : ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"f_1(m) = fracbe+m quad f_2(m) = am quad g(m) = frac1e+m","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"where a, b and e are positive numbers. Functions f_+, f_-, g_+ and g_- are given by ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"f_+(m) = fracf_1(m) + f_2(m)2 quad f_-(m) = fracf_1(m) - f_2(m)2 quad g_+(m) = g(m) quad g_-(m) = 0 ","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"# Benyahia & al. model\na = 1; b = 1; e = 1;\nf₁(m) = b / (e + m)\nf₂(m) = a * m\ng(m)  = 1 / (e + m)\n\n# Formating for the model\nf₊(m) = 0.5*(f₁(m) + f₂(m))\nf₋(m) = 0.5*(f₁(m) - f₂(m))\ng₊(m) = g(m)\ng₋(m) = 0\n\nmodel = MaxVolume(f₊, f₋, g₊, g₋)\nnothing; # hide","category":"page"},{"location":"basic-example.html#Direct-Solve","page":"Basic Example","title":"Direct Solve","text":"","category":"section"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"We can solve the optimal control problem by derect method, thanks to the OptimalControl.jl package.","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"t0 = 0; m0 = 1; tf = 10;                # initial and final time and state\n@def ocp begin                          # problem definition\n    t ∈ [ t0, tf ], time\n    m ∈ R, state\n    u ∈ R, control\n    -1 ≤ u(t) ≤ 1\n    m(t0) == m0\n    ṁ(t) == model.dynamic([0, m(t)], u(t))[2]\n    ∫( model.dynamic([0, m(t)], u(t))[1]) → max\nend\nsol = OptimalControl.solve(ocp, :madnlp)\nplot(sol)","category":"page"},{"location":"basic-example.html#Indirect-solve-and-optimal-synthesis","page":"Basic Example","title":"Indirect solve & optimal synthesis","text":"","category":"section"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"This package develops a code to solve this kind of optimal control problem by indirect methods. Compared to direct method, indirect shooting are known to be more precise and faster. However, to achieve this goal, the sructure of the control need to be konwn beforehand. This step is automaticaly done with the initial time t_0, the final time t_f and the initial state m_0.","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"After that, the optimal state and cost trajectory is computed without finding a zero of shooting function. To do this properly, we use the ContinuousCallback fonctionality of the OrdinaryDiffEq.jl package to detect when the control changes. For more information, see this documentation page","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"The output of the indirect_solve function is an ODESolution. The timestep t, the state m and the associated cost m^0 can be obtained via the following code","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"sol = indirect_solve(model, t0, tf, m0)\nt = sol.t\nm = [sol.u[i][2] for i in 1:length(sol.u)]\nm⁰ = [sol.u[i][1] for i in 1:length(sol.u)]\nplot(t, [m, m⁰], layout = [2], size=(600, 300), xlabel = \"time (t)\", labels = nothing, title=[\"State m\" \"Cost m⁰\"])","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"The optimal systhesis of this problem can be plot thanks to the optimal_synthesis function.","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"tlim = (t0,tf); mlim = (m0,10)\nplt = plot_synthesis(model, tlim, mlim)","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"We can easily add some optimal state trajectories on the optimal synthesis plot.","category":"page"},{"location":"basic-example.html","page":"Basic Example","title":"Basic Example","text":"for m0 ∈ range(mlim[1],mlim[2])\n    sol = indirect_solve(model, t0, tf, m0)\n    t = sol.t\n    m  = [sol.u[i][2] for i in 1:length(sol.u)]\n    plot!(plt, t, m, color = :Gray, label = \"\")\nend\nfor t0_ ∈ range(t0,tf)\n    sol = indirect_solve(model, t0_, tf, mlim[1])\n    t = sol.t\n    m  = [sol.u[i][2] for i in 1:length(sol.u)]\n    plot!(plt, t, m, color = :Gray, label = \"\")\n    sol = indirect_solve(model, t0_, tf, mlim[2])\n    t = sol.t\n    m  = [sol.u[i][2] for i in 1:length(sol.u)]\n    plot!(plt, t, m, color = :Gray, label = \"\")\nend\nplt","category":"page"}]
}
