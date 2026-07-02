package com.william.nba_stats.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/team")
public class TeamController {
    private final TeamService service;

    @Autowired
    public TeamController(TeamService service) {
        this.service = service;
    }

    @GetMapping
    public List<Team> getTeams() {
        return service.getTeams();
    }

    @GetMapping("/{id}")
    public Team getTeamById(@PathVariable Long id) {
        return service.getTeamById(id);
    }

    @GetMapping("/tabb/{tabb}")
    public Team getTeamByTabb(@PathVariable String tabb) {
        return service.getTeamByTabb(tabb);
    }

    @PostMapping
    public Team addTeam(@RequestBody Team team) {
        return service.addTeam(team);
    }

    @PutMapping
    public Team updateTeam(@RequestBody Team team) {
        return service.updateTeam(team);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable Long id) {
        service.deleteTeamById(id);
    }
}
